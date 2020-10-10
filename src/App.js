import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from "./login";
import { LoginForm, Password, User } from './login';
import { CreateAccount } from './createAccount';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
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
