import React from "react";
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './App.css';
import { Link } from 'react-router-dom';

export const Intro = () => {
  return <div className="App">
    <h1> Danish Around Town </h1>

  <dl class="row text-left mt-5 mb-5">
      <dt class="col-sm-12 h3 mb-3">Welcome! Here you can:</dt>

      <dt class="col-sm-12 h3 mb-3">  - Upload pictures of Danish signs and create your own filp cards.</dt>

      <dt class="col-sm-12 h3 mb-3">  - Learn Daish anytime with filpcards!</dt>

  </dl>
     {/* <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card> */}
    <Link to="/SignUp">
        <Button className="mBt float-left mb-4" variant="success" size="sm" type="submit">
            Sign Up | Log In
        </Button>
    </Link>
    <Link to="/Menu">
        <Button className="mBt float-right" variant="success" size="sm" type="submit">
            Start
        </Button>
    </Link>
  </div>
};