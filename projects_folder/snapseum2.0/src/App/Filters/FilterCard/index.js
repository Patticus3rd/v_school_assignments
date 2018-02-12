import React from 'react'
import { connect } from 'react-redux';
import { addFavorite } from '../../../redux/favorites.js';
import { Image, Card, Button, Icon } from 'semantic-ui-react';

function FilterCard(props) {
    let { filterName, filterArtist, filterURL, _id } = props;
    return (
            <Card>
                <Image src={filterURL} size="small" centered />
                <Card.Content>
                    <Card.Header >
                        {filterName}
                    </Card.Header>
                    <Card.Description>
                        Made By: {filterArtist}
                    </Card.Description>
                    <Card.Content>
                        <Button as='div' labelPosition='right'>
                            <Button icon onClick={() => addFavorite(_id)}>
                                <Icon name="heart" />
                                Like
        </Button>
                        </Button>
                        
                    </Card.Content>
                </Card.Content>
            </Card>
    )
}

export default connect(null, { addFavorite })(FilterCard);
