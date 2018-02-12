import React, { Component } from 'react';
import FilterCard from './FilterCard';
import axios from 'axios';
import { Card } from 'semantic-ui-react';
import './index.css'

const filterURL = "http://localhost:9000/snapcodes/"

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [],
        }
    }
    componentDidMount() {
        axios.get(filterURL)
            .then((response) => {
                let { data } = response;
                console.log(data);
                this.setState({
                    filters: data
                })
            })
    }


    render() {
        let { filters } = this.state;
        return (
            <div class="filter-group">
                <Card.Group itemsPerRow={5}>
                {filters.map((filter, id) => {
                    return <FilterCard key={id}{...filter} index={id} />
                })}
                </Card.Group>
            </div>
        )
    }
}

export default Filters;