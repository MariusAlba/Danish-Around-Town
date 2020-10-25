import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "./firebase";
import { Link } from 'react-router-dom';
import './App.css';
import Button  from 'react-bootstrap/Button';

export const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);

  return (
    <div>
      <Link to='/Menu'>
            <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle-fill backArrow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path filleRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
            </svg>
      </Link>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      {/* <button onClick={handleUpload}>Upload</button> */}
      <Button onClick={handleUpload}>Upload</Button>
      <br />
      {/* {url} */}
      <br />
      <img src={url || "http://via.placeholder.com/200"} alt="firebase-image" />
    </div>
  );
};

