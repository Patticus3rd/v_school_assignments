import React, { Component } from 'react';
import { Image, Card, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteFavorite } from '../../../redux/favorites.js';
import './index.css';


class FavCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorite: false
        }
    }

    render() {
        let { deleteFavorite, filterArtist, filterName, filterURL, _id } = this.props;
        return (
            <Card>
                <Image src={filterURL} size="small" centered />
                <Card.Content>
                    <Card.Header>
                        {filterName}
                    </Card.Header>
                    <Card.Description>
                        Made By: {filterArtist}
                    </Card.Description>
                    <Card.Content>
                        <Button as='div' labelPosition='left' onClick={() => deleteFavorite(_id)}>
                            <Button icon >
                                <Icon name="remove" />
                                Remove
        </Button>
                        </Button>
                    </Card.Content>
                </Card.Content>
            </Card>
        )
    }
}

export default connect(null, {deleteFavorite })(FavCard);
