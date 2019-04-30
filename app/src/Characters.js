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
            }
        )
    }
    render() {
        return (
            <div className="container text-center buffered">
                <span className="font-weight-bolder display-4">Characters</span>
                <div className="container contained">
                    <table className="table table-striped">
                        <tr className="font-weight-bolder bg-dark text-white">
                            <td>Name</td>
                            <td>Age</td>
                            <td>Race</td>
                            <td>Gender</td>
                            <td>Job</td>
                        </tr>
                        <tbody>
                            {this.state.characters.map(c => 
                            <tr>
                                <td>{c.name}</td><td>{c.age}</td><td>{c.race}</td><td>{c.gender}</td><td>{c.job}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Characters;