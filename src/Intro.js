import React, { useState } from "react";
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './App.css';
import { Link } from 'react-router-dom';
import Profileicon from "./Profileicon";
import Popup from "./Popup";



export const Intro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className="App">
    {/* <Profileicon /> */}
    <h1> Danish Around Town </h1>

    <dl class="row mb-5">
        <dt class="col-sm-12 h5 mb-3">Welcome! Here you can:</dt>

        <dt class="col-sm-12 h5 mb-3">  - Upload pictures of Danish signs and create your own filp cards.</dt>

        <dt class="col-sm-12 h5 mb-3">  - Learn Daish anytime with filpcards!</dt>

        <dt class="col-sm-12 h5 mb-3">Note: If you want your progress to be saved you would need to create an account. </dt>

    </dl>
      {/* <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card> */}
      <Link to="/SignUp">
          <Button className="mBt float-left mb-4" variant="success" size="sm" type="submit">
              Sign Up
          </Button>
      </Link>

      {/*<Link to="/Menu">*/}
      <Button className="mBt float-right" variant="success" size="sm" type="submit" onClick={togglePopup}>
          Start
      </Button>
      {isOpen && (
        <Popup 
        content={
          <>
          <p>
            You're welcome to use this app without sign in, but the system will not record the pictures you upload
          </p>

          <Link to="/Menu">
            <Button className="mBt center" variant="success" size="sm" type="submit">
              Start Anyway!
            </Button>
          </Link> 
          </>

        }
        handleClose={togglePopup}
        />
      )}


        {/*</Link>*/}
  </div>
};