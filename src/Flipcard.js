import React, { useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import Profileicon from "./Profileicon";
import Backbutton from "./Backbutton";
import { storage } from "./firebase";
import { useAuth } from "./contexts/AuthContext"

export const Flipcard = (props) => {

  const { currentUser } = useAuth();
  // In case of guest user, use -1 as the UID
  const userId = currentUser ? currentUser.uid : -1;

  // The array to get populated with data from server
  const [translations, setList] = useState([]);
  // We want to know, when we are done fetching images information from firebase
  // in case the user haven't uploaded any images yet.
  const [doneLoading, setDoneLoading] = useState(false);

  // Fetch translations, consider moving to a separate component - perhaps stateful component
  async function fetchTranslations(){
    // Fetch the files from the users folder
    const allFiles = await storage.ref(`images/${userId}/`).listAll();
    // For each file, get it's download URL
    const urlArray = allFiles.items.map( async result => {
        const url = await result.getDownloadURL();
        return url;

    });
    // Since we have an array of promises, we'll need to wait till all the url's are fetched
    const urls = await Promise.all(urlArray);
    // Define the array to contain the images
    let list = []
    urls.forEach(url =>{
      // Get the filename
      var httpsReference = storage.refFromURL(url);
      // Get the first part of the filename, ie. without the extension
      const filename = httpsReference.name.split('.').slice(0, -1).join('.');
      // Add the filename along with its URL to the array
      list.push({filename, url});
    });
    // Return the array of objects containing english text and URL
    return list;
  }

  // Fetch the translations from firebase and set the array
  useEffect(() => {
    fetchTranslations().then((listOfFilenameAndUrl) => {
      // Set the translation array
      setList(listOfFilenameAndUrl);
      // Yep, we are done fetching, in case no images loaded, this field will help
      // us distinquishing between no images while fetching, and no images when done fetching.
      setDoneLoading(true);
  })
  }, [])

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const resetIsFlipped = () => {
    setIsFlipped(false);
  };

  const imageId =
    (props.location && props.location.state && props.location.state.imageId) ||
    1;

  const nextImageId = imageId + 1;
  const previousImageId = imageId - 1;

  // We are allowing every uploaded image to be browsed through
  const isImageLimitReached = imageId >= translations.length;
  const isImageIdPositive = imageId > 1;

  // In case that no images are fetched, either due to load
  // in progress or no images found at all, we display a text and navigation options
  if (translations[0]===undefined) {
      return (
        <div className="container App">
          <Backbutton />
          <Profileicon />
          {doneLoading && (
            <h3 className="mb-5">
              No images found, kindly upload some images.
            </h3>
          )}
        </div>
      );
   }

  return (
    <div className="container App">
      <Backbutton />
      <Profileicon />
      {isImageIdPositive && (
        <Link
          to={{
            pathname: "/Flipcard",
            state: { imageId: previousImageId },
          }}
        >
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-left-circle-fill-custom mt-3"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            onClick={resetIsFlipped}
          >
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
            />
          </svg>
        </Link>
      )}
      <div className="row mt-5">
        <div className="col-lg-12" align="center">

          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="flipcard_container mt-5">

              <img
                className="flipcard_container"
                src={`${translations[imageId - 1].url}`
                /*  "https://firebasestorage.googleapis.com/v0/b/danish-around-town.appspot.com/o/images%2Fimage" +
                  imageId +
                  ".jpg?alt=media&token=17a46894-e86f-49bf-8e8e-7f491d671da6"*/
                }
                alt=""
              />
              <button className="front-flip-button btn" onClick={handleClick}>
                Click to flip
              </button>
            </div>

            <div className="flipcard_container flipText mt-5">
              <div>
                {translations[imageId - 1].filename}
              </div>

              <button onClick={handleClick} className="front-flip-button btn">
                Click to flip back
              </button>
            </div>
          </ReactCardFlip>
        </div>
      </div>
      {!isImageLimitReached && (
        <Link
          to={{
            pathname: "/Flipcard",
            state: { imageId: nextImageId },
          }}
        >
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-right-circle-fill mt-3"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            onClick={resetIsFlipped}
          >
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};
