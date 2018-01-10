import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
const hlURL = "http://api.vschool.io:6543/hitlist.json"

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        axios.get(hlURL)
            .then((response) => {
                let { data } = response;
                this.setState({
                    characters: data
                })
            })
            .catch((err) => {
                this.setState({
                    err: true
                })
            })
    }

    render() {
        let { characters } = this.state;
        return (
            <div>
                {characters.map((char, i) => {
                    return <Card key={i}{...char} ></Card>
                })}
            </div>
        )
    }
}

export default Characters;