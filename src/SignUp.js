import React from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/FormControl";
import './App.css';
import { Link } from 'react-router-dom';
import BackbuttonToIntro from "./BackbuttonToIntro";

export const SignUp = () => {
  return <div>
    <BackbuttonToIntro />
      <h1 className="text-center mb-5">
        Sign Up
    </h1>
      <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Username *</Form.Label>
        <Form.Control type="username" placeholder="Username" />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address *</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password *</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Link to="/Menu">
        <Button size="lg" type="submit" className="mb-2 float-right">
          Submit
        </Button>
      </Link>
      <Link to="/LogIn">
        <Button className="btn-btn" variant="success" size="lg" type="submit" >
          Log In
        </Button>
      </Link>
    </Form>
</div>
}