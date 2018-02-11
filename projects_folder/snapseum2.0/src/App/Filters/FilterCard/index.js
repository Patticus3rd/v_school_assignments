import React from 'react'
import { Image, Card } from 'semantic-ui-react';

function FilterCard(props) {
    let { filterName, filterArtist, filterURL, favorites} = props;
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
            </Card.Content>
        </Card>
    )
}

export default FilterCard;
