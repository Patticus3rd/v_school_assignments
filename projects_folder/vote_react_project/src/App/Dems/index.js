import React, { Component } from 'react';
import axios from 'axios';
import DemArticle from './DemArticle';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const repsURL = "http://localhost:9000/republicans/"

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
            <Link className="link-wrapper" to="/repform">
                    <Icon name='write'/>
                </Link> 
                {articles.map((article, i) => {
                    return <DemArticle key={i}{...article} />
                })}
            </div>
        )
    }
}

export default Dems;