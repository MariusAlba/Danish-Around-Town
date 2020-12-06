import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "./firebase";
import { Link } from "react-router-dom";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Backbutton from "./Backbutton";
import { ReactComponent as Camera } from "./img/camera.svg";
import { ReactComponent as Sitting } from "./img/sitting.svg";

import { Container, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


export const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

// document.getElementById()

  console.log("image: ", image);

  return (
  <div>
      <Backbutton />

      <div>
      <br />
      <br />

      <Container>
      <h3 className="mb-5">

        Upload daily Danish signs you see and review them in Flipcard
      </h3>
      </Container>

      {/* {url} */}
      <Container fluid>
        

        <Card bg="#4E48E7" text="dark" className="text-center p-3" style={{backgroundColor: '#4E48E7'}}>
        <blockquote className="text-center p-3">
          <Camera />
          <br />
        </blockquote>
        <Container>
        <Row className="justify-content-md-center">
        <Col md="auto">
          <input type="file" onChange={handleChange} />
        </Col>
        </Row>
        </Container>



        </Card>
      </Container>

      <br />
    </div>


    <div>
      <Container>

      <Form.Group>
      <Form.Control size="lg" type="text" placeholder="Enter English" />
        {/* <button onClick={handleUpload}>Upload</button> */}
      </Form.Group>
      </Container>
    </div>

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <i>Upload Progress</i>
    </div>

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <progress value={progress} max="100" />
    </div>

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <Button onClick={handleUpload} style={{backgroundColor: '#4E48E7'}}> Upload </Button>

      <Sitting   
        className="cartoonRight"
        height="100px"
        width="100px"
      />
    </div>
    



  </div>


  );
};
