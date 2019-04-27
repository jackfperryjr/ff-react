import React, { Component } from 'react';
import './App.css';

class Games extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        Games: [],
        isLoading: false,
      };
    }
    componentDidMount() {
      this.setState({ isLoading: true });
  
      fetch("https://www.moogleapi.com/api/v1/games")
        .then(response => response.json())
        .then(Games => {
          this.setState({ Games: Games, isLoading: false });
          //console.log(Games);
        }
      )
      
    }
    render() {
      return (
        <div className="container text-center">
          <h2>Games</h2>
          {this.state.Games.map(g => <div className="text-left">{g.title}</div>)}
        </div>
      );
    }
  }

  export default Games;