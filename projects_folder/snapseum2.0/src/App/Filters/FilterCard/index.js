import React from 'react'
import { Image, Card, Button, Icon } from 'semantic-ui-react';

function FilterCard(props) {
    let { filterName, filterArtist, filterURL, favorites } = props;
    return (
        <Card>
            <Image src={filterURL} />
            <Card.Content>
                <Card.Header>
                    {filterName}
                </Card.Header>
                <Card.Description>
                    Made By: {filterArtist}
                </Card.Description>
                <Card.Content>
                    <Button as='div' labelPosition='right'>
                        <Button icon>
                            <Icon name="heart" />
                            Like
        </Button>
                    </Button>
                </Card.Content>
            </Card.Content>
        </Card>
    )
}

export default FilterCard;
