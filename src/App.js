import React, { useState, useEffect } from "react";
import "./App.css";
import LogIn from "./login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute"
import { AccountCreated } from "./AccountCreated";
import { Intro } from "./Intro";
import { Menu } from "./Menu";
import { ReactFirebaseFileUpload } from "./UploadImg";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAppAuth } from "./firebase";
import { LoggedInScreen } from "./LoggedInScreen";
import { NotLoggedInScreen } from "./NotLoggedInScreen";
import { Flipcard } from "./Flipcard";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="App-header"></header>

        <Switch>
          <Route path="/" exact component={Intro} />
          {/* <Route path="/LoggedInScreen" exact component={LoggedInScreen} /> */}
          <Route path="/NotLoggedInScreen" exact component={NotLoggedInScreen} />
          <Route path="/AccountCreated" exact component={AccountCreated} />
          <Route path="/Menu" exact component={Menu} />
          <AuthProvider>
            <Route path="/login" exact component={LogIn} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/ForgotPassword" exact component={ForgotPassword} />
            <Route path="/UploadImg" exact component={ReactFirebaseFileUpload} />
            <Route path="/Flipcard" exact component={Flipcard} />
            <PrivateRoute path="/Profile" exact component={Profile} />
            <PrivateRoute path="/UpdateProfile" exact component={UpdateProfile} />
          </AuthProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
