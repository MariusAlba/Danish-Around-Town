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


  return (
    <BrowserRouter>

      <div className="container">
        <header className="App-header">
        </header>

        <Switch>

          <Route path="/NotLoggedInScreen" exact component={NotLoggedInScreen}/>
          <Route path="/" exact component={LoginForm}/>
          <Route path="/createAccount" exact component={CreateAccount}/>
          <Route path="/LoggedInScreen" exact component={LoggedInScreen}/>
          <Route path="/AccountCreated" exact component={AccountCreated}/>
          <Route path="/Intro" exact component={Intro}/>
          <Route path="/Menu" exact component={Menu}/>
          <Route path="/Profile" exact component={Profile}/>

        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
