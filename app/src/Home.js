import React, { Component } from 'react';
import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            character: {},
            isLoading: false,
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
    
        fetch("https://www.moogleapi.com/api/v1/characters/random")
            .then(response => response.json())
            .then(character => {
                this.setState({ character: character, isLoading: false });
            }
        )
    }
    render() {
        return (
            <div className="container text-center buffered">
                <span className="font-weight-bolder display-4">Welcome!</span>
                <hr className="random" />
                <br/>
                <p>This is my simple little React.js web application.</p>
                <p>Shameless plug: I'm reaching out to <a href="https://www.moogleapi.com" target="blank">MoogleApi</a> to pull in data from three different endpoints.</p>
                <br/>
                <div className="container random">
                    <p>Here's a fourth endpoint fetching a random character each time this page loads.</p>
                    <br/>
                    <img className="img" src={this.state.character.picture} alt="Random character"></img>
                    <br/>
                    <div className="random">
                        <strong>Name: </strong>{this.state.character.name}<br/>
                        <strong>Age: </strong>{this.state.character.age}<br/>
                        <strong>Race: </strong>{this.state.character.race}<br/>
                        <strong>Gender: </strong>{this.state.character.gender}<br/>
                        <strong>Job: </strong>{this.state.character.job}<br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;