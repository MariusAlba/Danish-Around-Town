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

      <dt class="col-sm-12 h3 mb-3"> - Upload pictures of Danish signs that you do not understand and they will be translated to English</dt>

      <dt class="col-sm-12 h3 mb-3"> - Add words to your vocabulary</dt>

      <dt class="col-sm-12 h3 mb-3 text-truncate"> - Make your own flipcards</dt>
  </dl>
     {/* <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card> */}
    <Link to="/createAccount">
        <Button className="mBt float-left mb-4" variant="success" size="sm" type="submit">
            Create account
        </Button>
    </Link>
    <Link to="/Menu">
        <Button className="mBt float-right" variant="success" size="sm" type="submit">
            Start
        </Button>
    </Link>
    <Link to="/Menu">
        <Button className="login float-right" variant="success" size="lg" type="submit">
            Login
        </Button>
    </Link>
  </div>
};