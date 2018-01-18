import React, { Component } from 'react'
import axios from 'axios';
import { Header } from 'semantic-ui-react'

class Cards extends Component {
    constructor(){
        super();
        this.state = {
            characters: []
        }
    }
    
    componentDidMount(){
        axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({
                characters: response.data,
            })
        })
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.match.params.id !== this.props.match.params.id ) {
            axios.get(`https://swapi.co/api/people/${nextProps.match.params.id}`)
            .then(response => {
                return axios.get(`https://swapi.co/api/people/${nextProps.match.params.id}/homeworld`);
                })
                .then((response) =>{
                console.log(response)
                })
                .catch((err) =>{
                    console.log(err)
                })
        }
    }
    

    render(){
    return (
        <div>
           <Header size='huge' inverted color='yellow'>Name: {this.state.characters.name}</Header>
           <Header size='large'>Birthday: {this.state.characters.birth_year}</Header>
           <Header size='large'>{this.state.characters.homeworld}</Header>
        </div>
    )
}
}

export default Cards;