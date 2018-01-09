import React, { Component } from 'react';
import Character from './Character';
import axios from 'axios';
const swURL = "https://swapi.co/api/people";



class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
            err: false,
            errMsg: ""
        }
    }


    componentDidMount() {
        axios.get(swURL)
            .then((response) => {
                let { results } = response.data
                this.setState({
                    characters: results,
                    loading: false
                })
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                })

            })
    }


    render() {
        let { characters, loading, errMsg, err } = this.state
        return (
            loading ?
                <div>
                    <h1>IM LOADING!!!!!</h1>
                </div>
                :
                err ?
                    <div>
                        <p>Sorry!! This is not loading</p>
                        <p>{errMsg}</p>
                    </div>
                    :
                    <div>
                        {characters.map((character, i) => {
                            return <Character key={i}{...character}> </Character>
                        })}
                    </div>
        )
    }
}

export default Characters;


//when the component mounts, make get request
//when the data comes back, set state to contain data
//display data