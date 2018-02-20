import React, { Component } from 'react';
import axios from 'axios';
import RepArticle from './RepArticle';
import { Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const demsURL = "http://localhost:9000/democrats"

class Reps extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount(){
        axios.get(demsURL)
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
                <Link className="link-wrapper" to="/daform">
                    <Icon name='write'/>
                </Link>        
                {articles.map((article, i) => {
                    return <RepArticle key={i}{...article} />
                })}
            </div>
        )
    }
}

export default Reps;