import React from "react";
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import { Link } from 'react-router-dom';

export const AccountCreated = () => {
  return <div className="container App">
      <h1 className="mb-5">Account Created !!</h1>
        <h3 className="mb-5">Welcome to the community</h3>
        <svg width="10em" height="10em" viewBox="0 0 16 16" class="bi bi-file-check-fill col-lg-12 mb-5" fill="rgb(78, 72, 231, 1)" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1.146 6.854a.5.5 0 0 0-.708-.708L7.5 8.793 6.354 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
        </svg>
        <Link to="/Intro">
          <Button className="signUpButton" variant="success" size="lg" type="submit">
              Next
          </Button>
        </Link>
  </div>
};