import React from "react";
import { Button, Card, Form } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';
import BackbuttonToIntro from "./BackbuttonToIntro";


export const User = () => {
 return <form>
    <label>
       <input placeholder="User" type="text" name="name" />
    </label>
 </form>
};

export const Password = () => {
  return <div>
    <form>
     <label>
      <input placeholder="Password" type="text" name="name" />
     </label>
  </form>
  <button type="button" class="btn btn-success float-left">Sign Up</button>
  <button type="button" class="btn btn-success float-right">Login</button>
</div>
 };

 export const LoginForm = () => {
   return <>
    <BackbuttonToIntro />
    <Card>
      <Card.Body>
        <h1 className="text-center mb-5">
            Log In
        </h1>
        <Form className="">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted ml-1">
              We'll never share your email with anyone else
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <a href="" className="float-right">Forgot password?</a>
            <Form.Check type="checkbox" label="Check me out" className="ml-1" />
          </Form.Group>
        </Form>
        <Link to="/SignUp">
            <Button className="logInButton" variant="success" size="md" type="submit">
              Log In
            </Button>
        </Link>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
    </div>
   </>
 };
