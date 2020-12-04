import React from "react";
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './App.css';
import { Link } from 'react-router-dom';

export const Intro = () => {
  return <div className="App">
<<<<<<< Updated upstream
    <h1> Danish Around Town </h1>

  <dl class="row text-left mt-5 mb-5">
      <dt class="col-sm-12 h3 mb-3">Welcome! Here you can:</dt>

      <dt class="col-sm-12 h3 mb-3"> - Upload pictures of Danish signs that you do not understand and they will be translated to English</dt>

      <dt class="col-sm-12 h3 mb-3"> - Add words to your vocabulary</dt>

      <dt class="col-sm-12 h3 mb-3 text-truncate"> - Make your own flipcards</dt>
=======
    {/* <Profileicon /> */}
    <h1> Danish Around Town </h1>

    <dl class="row mb-5">
        <dt class="col-sm-12 h5 mb-3">Welcome! Here you can:</dt>

        <dt class="col-sm-12 h5 mb-3">  - Upload pictures of Danish signs and create your own filp cards.</dt>

        <dt class="col-sm-12 h5 mb-3">  - Learn Daish anytime with filpcards!</dt>

        <dt class="col-sm-12 h5 mb-3">Note: If you want your progress to be saved you would need to create an account. </dt>
>>>>>>> Stashed changes

      <dt class="col-sm-12 h3 mb-3"><span>Note: </span>If you want your progress to be saved you would need to create an account. </dt>
  </dl>
     {/* <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card> */}
    <Link to="/createAccount">
        <Button className="signUpButton float-left" variant="success" size="lg" type="submit">
            Create account
        </Button>
    </Link>
    <Link to="/Menu">
        <Button className="signUpButton float-right" variant="success" size="lg" type="submit">
            Start
        </Button>
    </Link>
  </div>
};