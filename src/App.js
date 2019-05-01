import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Games from './Games';
import Characters from './Characters';
import Monsters from './Monsters';
import logo from './moogle-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/ff-react">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbar" className="navbar-collapse collapse" aria-expanded="true">
            <ul className="nav navbar-nav">
              <li><Link to="/games" className="nav-item nav-link">Games</Link></li>
              <li><Link to="/characters" className="nav-item nav-link">Characters</Link></li>
              <li><Link to="/monsters" className="nav-item nav-link">Monsters</Link></li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/games" component={Games} />
        <Route path="/characters" component={Characters} />
        <Route path="/monsters" component={Monsters} />
      </Router>
    );
  }
}

export default App;