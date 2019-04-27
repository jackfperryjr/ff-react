import React, { Component } from 'react';
import logo from './moogle-logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Games from './Games';
import Characters from './Characters';
import Monsters from './Monsters';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/games" className="nav-item nav-link">Games</Link>
              <Link to="/characters" className="nav-item nav-link">Characters</Link>
              <Link to="/monsters" className="nav-item nav-link">Monsters</Link>
            </div>
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
  
function Home() {
  return (
    <div>
    </div>
  );
}

export default App;
