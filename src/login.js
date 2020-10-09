import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';


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
     {/* <input type="submit" value="Sign Up" />
     <input type="submit" value="Login" /> */}
  </form>
  <button type="button" class="btn btn-success float-left">Sign Up</button>
  <button type="button" class="btn btn-success float-right">Login</button>
</div>
 };

 export const LoginForm = () => {
   return <div>
          <Form className="mt-1">
            <Form.Group controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted ml-1">
                We'll never share your email with anyone else
              </Form.Text>
            </Form.Group>

      <Form.Group controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <a href="" className="float-right">Forgot password?</a>
        <Form.Check type="checkbox" label="Check me out" className="ml-1" />
      </Form.Group>

      <Button className="signUpButton" variant="success" size="lg" type="submit">
        Sign Up
      </Button>
      <Button className="float-right logInButton" variant="success" size="lg" type="submit" >
        Login
      </Button>
    </Form>
   </div>
 };
