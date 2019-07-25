import React, { Component } from 'react'
import './App.css'
import spinner from './icon-spinner.gif'

// This component brings in all the monsters.
class Monsters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      monsters: [],
      isLoading: false
    }
  }
  componentDidMount () {
    this.setState({ isLoading: true })

    fetch('https://www.moogleapi.com/api/v1/monsters')
      .then(response => response.json())
      .then(monsters => {
        this.setState({ monsters: monsters, isLoading: false })
      }
      )
  }
  render () {
    const isLoading = this.state.isLoading
    let render
    let divSpacing = {
      margin: '10% auto 0 auto'
    }

    if (isLoading) {
      render = <div className='random' style={divSpacing} isLoading={isLoading}>
        <img className='img' src={spinner} alt='Random character' />
      </div>
    } else {
      render = <div class='container contained'>
        <table className='table table-condensed table-striped'>
          <tr className='font-weight-bolder bg-dark text-white'>
            <td>Name</td>
            <td>Hp</td>
            <td>Mp</td>
          </tr>
          <tbody>
            {this.state.monsters.map(m =>
              <tr>
                <td><img className='img-monster' src={m.picture} alt={m.name} />{m.name}</td><td>{m.hitPoints}</td><td>{m.manaPoints}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    }
    return (
      <div className='container text-center buffered'>
        <span className='font-weight-bolder display-4'>Monsters</span>
        {render}
      </div>
    )
  }
}

export default Monsters
