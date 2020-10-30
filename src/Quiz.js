import React from "react";
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './App.css';
import { Link } from 'react-router-dom';

export const Quiz = () => {
  return <div className="App">
    <Link to='/Menu'>
      <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill backArrow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path filleRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
      </svg>
    </Link>
    <Link to="/Profile">
    <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-person-circle float-right user" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
      <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
    </svg>
    </Link>
    <h1> Dog </h1>
    <div className="row">
      <div className="col-lg-6">
        <Link to="/Menu">
          <Button className="quizItmButton mb-5" variant="success" size="lg" type="submit">
            Tog
          </Button>
        </Link>
      </div>
      <div className="col-lg-6 ">
        <Link to="/Menu">
          <Button className="quizItmButton mb-5" variant="success" size="lg" type="submit">
            Hund
          </Button>
        </Link>
      </div>
      <div className="col-lg-6">
        <Link to="/Menu">
          <Button className="quizItmButton mb-5" variant="success" size="lg" type="submit">
            Hus
          </Button>
        </Link>
      </div>
      <div className="col-lg-6">
        <Link to="/Menu">
          <Button className="quizItmButton mb-5" variant="success" size="lg" type="submit">
            Vand
          </Button>
        </Link>
      </div>
    </div>
  </div>
};