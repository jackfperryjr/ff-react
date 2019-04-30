import React, { Component } from 'react';
import './App.css';

class Monsters extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            monsters: [],
            isLoading: false,
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
    
        fetch("https://www.moogleapi.com/api/v1/monsters")
            .then(response => response.json())
            .then(monsters => {
                this.setState({ monsters: monsters, isLoading: false });
            }
        )
    }
    render() {
        return (
            <div className="container text-center buffered">
                <span className="font-weight-bolder display-4">Monsters</span>
                <div class="container contained">
                    <table className="table table-condensed table-striped">
                        <tr className="font-weight-bolder bg-dark text-white">
                            <td>Name</td>
                            <td>Strength</td>
                            <td>Weakness</td>
                        </tr>
                        <tbody>
                            {this.state.monsters.map(m => 
                            <tr>
                                <td>{m.name}</td><td>{m.strength}</td><td>{m.weakness}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Monsters;