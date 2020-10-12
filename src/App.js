import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from "./login";
import { LoginForm, Password, User } from './login';
import { CreateAccount } from './createAccount';
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
  return user ? <LoggedInScreen /> : <NotLoggedInScreen />;


  return (
    <BrowserRouter>
      <div className="container App">
        <header className="App-header">

          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          {/* <Header /> */}


          {/* <User />
          <Password /> */}

          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}

          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

        </header>
        <body>
        <Switch>

          <Route path="/login" exact component={LoginForm}/>
          <Route path="/createAccount" exact component={CreateAccount}/>

          </Switch>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
