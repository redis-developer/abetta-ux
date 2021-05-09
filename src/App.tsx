import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
