import React, { useEffect, useState, Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import Profileicon from "./Profileicon";
import Backbutton from "./Backbutton";

export const Flipcard = (image) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container App">
      <Backbutton />
      <Profileicon />
      <div className="row">
        <div className="col-lg-12" align="center">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className="flipcard_container">
              <img className="location-front-image" src="https://firebasestorage.googleapis.com/v0/b/danish-around-town.appspot.com/o/fsdssd.JPG?alt=media&token=dae85f3f-4666-40c3-a1cf-f13e4ee45def" alt="" />
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
                Private Area
              </div>

              <button onClick={handleClick} className="front-flip-button btn">
                Click to flip back
              </button>
            </div>
          </ReactCardFlip>
        </div>
      </div>
      <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
    </svg>
    </div>
  );
};
