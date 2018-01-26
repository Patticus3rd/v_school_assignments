import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import ExCard from './ExCard/index';

const xbtUrl = "https://api.harvardartmuseums.org/exhibition?apikey=040e0810-008c-11e8-87d8-754fcee58be2&venue=HAM&hasimage=1"


class Exhibitions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exhibtions: []
        }
    }

    componentDidMount() {
        axios.get(xbtUrl)
            .then((response) => {
                console.log(records)
                let { records } = response.data;
                this.setState({
                    exhibtions: records
                })
            })
    }

    render() {
        let { exhibtions } = this.state;
        return (
            <div class="container">
               {exhibtions.map((exhibtion, i) => {
                   return <ExCard key={i}{...exhibtion}></ExCard>
               })}
                </div>
        )
    }
}


export default Exhibitions;