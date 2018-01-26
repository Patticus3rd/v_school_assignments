import React from 'react'
import { Image, Card } from 'semantic-ui-react';

function ImageCard(props) {
    let { primaryimageurl, title, copyright, description } = props;
    return (
        <Card>
            <Image src={primaryimageurl} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='copyright'>
                        Property of: {copyright}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
        </Card>

    )
}

export default ImageCard;