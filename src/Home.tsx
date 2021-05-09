import React from 'react';
import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export function Home() {
  return (

    <div className="App">
        <header className="App-header">
        <p>
            ABetta-Me App
        </p>
        <a href="http://localhost:8080/oauth2/authorization/google">Login</a>
        </header>
    </div>
  );
}

export default Home;
