import React, { Component } from 'react';
import axios from 'axios';
import FavCard from './FavCard';
import { Card } from 'semantic-ui-react';

const favURL = "http://localhost:9000/favorites"

class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        axios.get(favURL)
            .then((response) => {
                let { data } = response;
                console.log(data);
                this.setState({
                    favorites: data
                })
            })
    }

    render() {
        let { favorites } = this.state;
        return (
            <div class="fav-wrapper">
            <Card.Group itemsPerRow={5}>
                {favorites.map((favorite, i) => {
                    return <FavCard key={i}{...favorite}/>
                })}
                </Card.Group>
            </div>
        )
    }
}

export default Favorites;