import React from "react";
import { Button, Card, Form, FormControl, InputGroup } from "react-bootstrap"
import './App.css';
import { Link } from 'react-router-dom';
import BackbuttonToIntro from "./BackbuttonToIntro";

export const SignUp = () => {
  return <>
    <BackbuttonToIntro />
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">
          Sign Up
        </h2>
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
        </Form>
        <Link to="/Menu">
          <Button className="signUpButton" variant="success" size="md" type="submit">
            Sign Up
          </Button>
        </Link>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
          Already have an account? <Link to="LogIn">Log In</Link>
    </div>
  </>
}