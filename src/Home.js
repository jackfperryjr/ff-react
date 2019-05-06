import React, { Component } from 'react';
import './App.css';
import spinner from './icon-spinner.gif';

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
        const isLoading = this.state.isLoading;
        let render;

        if (isLoading) {
            render = <div className="random" isLoading={isLoading}>
                        <img className="img" src={spinner} alt="Random character"></img>
                    </div>;
        } else {
            render = <div className="random">
                        <img className="img" src={this.state.character.picture} alt="Random character"></img>
                        <div className="row">
                            <div className="offset-md-3 col-md-6">
                                <table className="centered">
                                    <tbody>
                                        <tr>
                                            <td className="text-left font-weight-bold">Name: </td>
                                            <td className="text-right">{this.state.character.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left font-weight-bold">Age: </td>
                                            <td className="text-right">{this.state.character.age}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left font-weight-bold">Race: </td>
                                            <td className="text-right">{this.state.character.race}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left font-weight-bold">Gender: </td>
                                            <td className="text-right">{this.state.character.gender}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left font-weight-bold">Job: </td>
                                            <td className="text-right">{this.state.character.job}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        
                    </div>;
        }

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
                    <br/>
                    {render}
                </div>
            </div>
        );
    }
}

export default Home;