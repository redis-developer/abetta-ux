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
import NavigationBar from './common/NavigationBar';
import Wizard from './dashboard/Wizard';

function App() {
  return (
    <div>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/wizard" exact component={Wizard} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
