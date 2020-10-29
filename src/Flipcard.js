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
              <img className="location-front-image" src="IMAGE.jpg" alt="" />
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
    </div>
  );
};
