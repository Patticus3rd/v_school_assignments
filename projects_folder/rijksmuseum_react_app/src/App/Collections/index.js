import React, { Component } from 'react';
import axios from 'axios';
import ImageCard  from '../Collections/ImageCard/index.js';
import SearchForm from '../../shared/SearchForm/SearchForm';



// const baseURL = "https://api.harvardartmuseums.org/image?apikey=040e0810-008c-11e8-87d8-754fcee58be2&sort=random&accesslevel=1?q=height:1000"
const baseURL = "https://api.harvardartmuseums.org/object?apikey=040e0810-008c-11e8-87d8-754fcee58be2&classification=Paintings&hasimage=1&sort=random"


class Collections extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: [],
        }
    }

    componentDidMount(){
        axios.get(baseURL)
            .then((response) => {
                console.log(response.data)
                let { records } = response.data;
                this.setState({
                    collections: records
                })
            })
    }

    render(){
       let { collections } = this.state;
        return(
            <div class="container">
                <SearchForm />
                {collections.map((collection, i) => {
                    return <ImageCard key={i}{...collection}></ImageCard>
                })}
            </div>
        )
    }
}

export default Collections;