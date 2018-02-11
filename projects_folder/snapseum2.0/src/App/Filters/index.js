import React, { Component } from 'react';
import FilterCard from './FilterCard';
import axios from 'axios';

const filterURL = "http://localhost:9000/snapcodes/"

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: []
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
            <div>
                {filters.map((filter, id) => {
                    return <FilterCard key={id}{...filter} index={id} />
                })}
            </div>
        )
    }
}

export default Filters;