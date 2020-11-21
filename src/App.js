import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import { Header } from "./LogIn";
import { LoginForm, Password, User } from "./LogIn";
import { SignUp } from "./SignUp";
import { AccountCreated } from "./AccountCreated";
import { Intro } from "./Intro";
import { Menu } from "./Menu";
import { Profile } from "./Profile";
import { ReactFirebaseFileUpload } from "./UploadImg";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./firebase";
import { LoggedInScreen } from "./LoggedInScreen";
import { NotLoggedInScreen } from "./NotLoggedInScreen";
import { Flipcard } from "./Flipcard";

function App() {
  // const [user, setUser] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  // We're using a package where someone else created a "hook" for using Firebase functionality
  const [user, loading] = useAuthState(firebaseAppAuth);

  // If it's still loading the user-state, we're showing nothing here. We could show a spinner,
  // but it will change very fast and it might be more confusing than a blank screen for half a sec
  if (loading) {
    return null;
  }

  // We will show a component based on whether we have a "user" or not
  // return user ? <LoggedInScreen /> : <NotLoggedInScreen />;

  return (
    <BrowserRouter>
      <div className="container">
        <header className="App-header"></header>

        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/SignUp" exact component={SignUp} />
          {/* <Route path="/LoggedInScreen" exact component={LoggedInScreen} /> */}
          <Route path="/NotLoggedInScreen" exact component={NotLoggedInScreen} />
          <Route path="/AccountCreated" exact component={AccountCreated} />
          <Route path="/Menu" exact component={Menu} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/UploadImg" exact component={ReactFirebaseFileUpload} />
          <Route path="/Flipcard" exact component={Flipcard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
