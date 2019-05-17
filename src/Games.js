import React, { Component } from 'react'
import './App.css'
import spinner from './icon-spinner.gif'

class Games extends Component {
  constructor (props) {
    super(props)

    this.state = {
      games: [],
      isLoading: false
    }
  }
  componentDidMount () {
    this.setState({ isLoading: true })

    fetch('https://www.moogleapi.com/api/v1/games')
      .then(response => response.json())
      .then(games => {
        this.setState({ games: games, isLoading: false })
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
      render = <div className='container contained'>
        <table className='table table-condensed table-striped'>
          <tr className='font-weight-bolder bg-dark text-white'>
            <td>Title</td>
            <td>Platform</td>
            <td>Release Date</td>
          </tr>
          <tbody>
            {this.state.games.map(g =>
              <tr>
                <td>{g.title}</td><td>{g.platform}</td><td>{g.releaseDate}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    }
    return (
      <div className='container text-center buffered'>
        <span className='font-weight-bolder display-4'>Games</span>
        {render}
      </div>
    )
  }
}

export default Games
