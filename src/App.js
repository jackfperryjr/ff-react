import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Games from './Games'
import Characters from './Characters'
import Monsters from './Monsters'
import moogle from './icon-moogle.png'
import './App.css'
import $ from 'jquery'

class App extends Component {
  closeNavDropdown () {
    var nav = $('.navbar-collapse')
    nav.on('click', 'a:not([data-toggle])', null, function () { // Making my silly Bootstrap .navbar collapse on click
      nav.collapse('hide')
    })
  }
  render () {
    return (
      <Router basename='/final-fantasy-react'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to='/'><img src={moogle} className='App-logo' alt='Moogle' /></Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar' aria-controls='navbar' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div id='navbar' className='navbar-collapse collapse' aria-expanded='true' onClick={this.closeNavDropdown}>
            <ul className='nav navbar-nav'>
              <li><Link to='/games' className='nav-item nav-link'>Games</Link></li>
              <li><Link to='/characters' className='nav-item nav-link'>Characters</Link></li>
              <li><Link to='/monsters' className='nav-item nav-link'>Monsters</Link></li>
            </ul>
          </div>
        </nav>
        <Route exact path='/' component={Home} />
        <Route path='/games' component={Games} />
        <Route path='/characters' component={Characters} />
        <Route path='/monsters' component={Monsters} />
      </Router>
    )
  }
}

export default App
