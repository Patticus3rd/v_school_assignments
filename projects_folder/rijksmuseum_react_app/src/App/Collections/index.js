import React, { Component } from 'react';
import axios from 'axios';
import Card  from '../Collections/Card/index.js';



const baseURL = "https://api.harvardartmuseums.org/image?apikey=040e0810-008c-11e8-87d8-754fcee58be2"


class Collections extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: []
        }
    }

    componentDidMount(){
        axios.get(baseURL)
            .then((response) => {
                let { records } = response.data;
                this.setState({
                    collections: records
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