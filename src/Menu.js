import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./App.css";
import { Link } from "react-router-dom";
import Profileicon from "./Profileicon";
import { ReactComponent as Peaceful} from "./img/peaceful.svg";

export const Menu = () => {


  return (
    <div
    className="container App" style={{ marginTop: "40px" }}>
      <Profileicon />
      <span>
      <h1 className="mb-6">
        <i>Hej!</i>
      </h1>
      </span>

      <h3 className="mb-5">
        What would you like to do?
      </h3>
      <div className="row">
        <div className="col-lg-6">
          <Link
            to={{
              pathname: "/Flipcard",
              state: { imageId: 1 },
            }}
          >
            <Button
              className="mBt mb-4"
              variant="info"
              size="md"
              type="submit"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-exclude"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm12 2v7a1 1 0 0 1-1 1H4V5a1 1 0 0 1 1-1h7z"
                />
              </svg>{" "}
              Flipcard
            </Button>
          </Link>
        </div>
        <div className="col-lg-5 ">
          <Link to="/UploadImg">
            <Button
              className="mBt mb-4"
              variant="info"
              size="md"
              type="submit"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-cloud-arrow-up-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 1 0V6.707l1.146 1.147a.5.5 0 0 0 .708-.708z"
                />
              </svg>{" "}
              Upload Picture
            </Button>
          </Link>
        </div>
      </div>
      <Peaceful className="cartoonCenter"
        height="180px"
        width="180px"
      />
    </div>
  );
};
