import React, { Component } from 'react';
import './App.css';

class Games extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            games: [],
            isLoading: false,
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
  
        fetch("https://www.moogleapi.com/api/v1/games")
            .then(response => response.json())
            .then(games => {
                this.setState({ games: games, isLoading: false });
            }
        )
      
    }
    render() {
        return (
            <div className="container text-center">
                <h2>Games</h2>
                <div className="container contained">
                    <table className="table table-condensed table-striped">
                        <thead className="font-weight-bolder display-4 text-left">Games</thead>
                        <tr className="font-weight-bolder bg-dark text-white">
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
            </div>
        );
    }
}

export default Games;