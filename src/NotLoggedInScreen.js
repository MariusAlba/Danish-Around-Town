import React from "react";
import { firebaseAppAuth, provider } from "./firebase";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import { Link } from 'react-router-dom';

export const NotLoggedInScreen = () => {
  const handleSignIn = () => firebaseAppAuth.signInWithPopup(provider);

  return (
    <div>
      <h3>Please sign in.</h3>

      <Button onClick={handleSignIn} className="logInButton" variant="success" size="lg" type="submit" >
        Sign in with Google
        </Button>
      {/* <button onClick={handleSignIn}>Sign in with Google</button> */}
    </div>
  );
};