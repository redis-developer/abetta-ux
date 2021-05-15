import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './dashboard/Dashboard';
import Home from './Home';
import NavigationBar from './common/NavigationBar';
import Wizard from './dashboard/Wizard';
import AddMetric from './dashboard/AddMetric';
import HelpPage from './help/HelpPage';

function App() {
  return (
    <div>
      <NavigationBar />
      <div className="main-content">
        <Router>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/help" exact component={HelpPage} />
            <Route path="/wizard" exact component={Wizard} />
            <Route path="/addMetric" exact component={AddMetric} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
