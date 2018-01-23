import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

const rijkURL = "https://rijksmuseum.nl/api/nl/collection/SK-C-5/tiles?key=PCL2LfWt&format=json"
const baseURL = "http://cors.vschool.io?url=https://rijksmuseum.nl/api/nl/collection/SK-C-5/tiles?key=PCL2LfWt&format=json"




class Collections extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: {}
        }
    }

    componentDidMount(){
        axios.get(baseURL)
            .then((response) => {
                let { data } = response;
                console.log(data)
                this.setState({
                    collections: data
                })
            })
    }

    render(){
       let { collections } = this.state;
        return(
            <div>
                {collections.map((collection, i) => {
                    return <Card key={i}{...collection}></Card>
                })}
            </div>
        )
    }
}

export default Collections;