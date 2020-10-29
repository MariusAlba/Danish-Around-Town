import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";

export default class Backbutton extends Component {
  render() {
    return (
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
    );
  }
}
