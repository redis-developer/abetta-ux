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
        <Link to="/dashboard">Login</Link>
        </header>
    </div>
  );
}

export default Home;
