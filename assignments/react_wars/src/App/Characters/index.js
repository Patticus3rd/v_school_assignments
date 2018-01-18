import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const swURL = "https://swapi.co/api/people/"

class Characters extends Component {
    constructor(props) {
        super();
        this.state = {
            characters: [],
            loading: true,
            err: false,
        }
    }

    componentDidMount() {
        axios.get(swURL)
            .then((response) => {
                this.setState({
                    characters: response.data.results
                })
            })
    }
    render() {
        const peopleList = this.state.characters.map((person, index) =>
            <Link
                className='sidelinks'
                to={`/person/${index + 1}`}
                key={index + person.name}>{person.name}
            </Link>
        )
        return (
            <div className="sidebar">
                {peopleList}
            </div>
        )
    }
}

export default Characters;


