import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article';

const repsURL = "http://localhost:9000/republicans"

class Dems extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount(){
        axios.get(repsURL)
        .then((response) => {
            console.log(response)
            this.setState({
                articles: response.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        let { articles } = this.state;
        return(
            <div>
                {articles.map((article, i) => {
                    return <Article key={i}{...article} />
                })}
            </div>
        )
    }
}

export default Dems;