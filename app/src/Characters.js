import React, { Component } from 'react';
import './App.css';

class Characters extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        characters: [],
        isLoading: false,
      };
    }
    componentDidMount() {
      this.setState({ isLoading: true });
  
      fetch("https://www.moogleapi.com/api/v1/characters")
        .then(response => response.json())
        .then(characters => {
          this.setState({ characters: characters, isLoading: false });
          //console.log(characters);
        }
      )
      
    }
    render() {
      return (
        <div className="container text-center">
          <h2>Characters</h2>
          {this.state.characters.map(c => <div className="text-left">{c.name}</div>)}
        </div>
      );
    }
  }

  export default Characters;