import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from "./Header";
import { LoginForm, Password, User } from './login';


function App() {
  return (
    <div className="container App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Header />
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
        <LoginForm />
      </body>
    </div>
  );
}

export default App;
