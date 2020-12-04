<<<<<<< Updated upstream
import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from "./login";
import { LoginForm, Password, User } from './login';
import { CreateAccount } from './createAccount';
import { AccountCreated } from './AccountCreated';
import { Intro } from './Intro';
import { Menu } from './Menu';
import { Profile } from './Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
=======
import React, { useState, useEffect } from "react";
import "./App.css";
import LogIn from "./login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute"
// import { LoginForm, Password, User } from "./LogIn";
import { AccountCreated } from "./AccountCreated";
import { Intro } from "./Intro";
import { Menu } from "./Menu";
import { ReactFirebaseFileUpload } from "./UploadImg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
>>>>>>> Stashed changes

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./firebase";
import { LoggedInScreen } from "./LoggedInScreen";
import { NotLoggedInScreen } from "./NotLoggedInScreen";


function App() {
  // const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
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

// test
  return (
    <BrowserRouter>
      <div className="container App">
        <header className="App-header">
        </header>
        <body>
        <Switch>

          <Route path="/NotLoggedInScreen" exact component={NotLoggedInScreen}/>
          <Route path="/login" exact component={LoginForm}/>
          <Route path="/createAccount" exact component={CreateAccount}/>
          <Route path="/LoggedInScreen" exact component={LoggedInScreen}/>
          <Route path="/AccountCreated" exact component={AccountCreated}/>
          <Route path="/Intro" exact component={Intro}/>
          <Route path="/Menu" exact component={Menu}/>
          <Route path="/Profile" exact component={Profile}/>

        </Switch>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
