import React, { useEffect, useState, Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import Profileicon from "./Profileicon";
import Backbutton from "./Backbutton";

export const Flipcard = (props) => {
  const translations = [
    "Keep distance",
    "Speed Control",
    "One Way",
    "Spring",
    "Merry christmas",
  ];

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

  const isImageLimitReached = imageId >= 5;
  const isImageIdPositive = imageId > 1;

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
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-left-circle-fill-custom"
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
      <div className="row">
        <div className="col-lg-12" align="center">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="flipcard_container">
              <img
                className="location-front-image"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/danish-around-town.appspot.com/o/images%2Fimage" +
                  imageId +
                  ".jpg?alt=media&token=17a46894-e86f-49bf-8e8e-7f491d671da6"
                }
                alt=""
              />
              <button className="front-flip-button btn" onClick={handleClick}>
                click to flip
              </button>
            </div>

            <div className="flipcard_container">
              <div
                style={{
                  backgroundColor: "rgb(78, 72, 231, 1)",
                  height: 500,
                  width: 700,
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "100px",
                }}
              >
                {translations[imageId - 1]}
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
            width="3em"
            height="3em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-right-circle-fill"
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
      <Link to="/Menu">
        <svg
          width="3em"
          height="3em"
          viewBox="0 0 16 16"
          className="bi bi-arrow-left-circle-fill backArrow"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            filleRule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
          />
        </svg>
      </Link>
    </div>
  );
};
