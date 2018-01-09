import React, { Component } from 'react';
import Card from './';
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
                console.log(response)
                let { results } = response.data
                this.setState({
                    characters: results
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
                {characters.map((character, i) => {
                    return <Card key={i}{...character}></Card>
                })}
            </div>
        )
    }
}

export default Characters;