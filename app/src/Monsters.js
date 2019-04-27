import React, { Component } from 'react';
import './App.css';

class Monsters extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        Monsters: [],
        isLoading: false,
      };
    }
    componentDidMount() {
      this.setState({ isLoading: true });
  
      fetch("https://www.moogleapi.com/api/v1/monsters")
        .then(response => response.json())
        .then(Monsters => {
          this.setState({ Monsters: Monsters, isLoading: false });
          //console.log(Monsters);
        }
      )
      
    }
    render() {
      return (
        <div className="container text-center">
          <h2>Monsters</h2>
          {this.state.Monsters.map(m => <div className="text-left">{m.name}</div>)}
        </div>
      );
    }
  }

  export default Monsters;