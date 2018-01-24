import React from 'react'
import { Image, Card } from 'semantic-ui-react';

function ImageCard(props) {
    let { baseimageurl, title, copyright } = props;
    return (
        <Card>
            <Image src={baseimageurl} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='copyright'>
                        Property of: {copyright}
        </span>
                </Card.Meta>
            </Card.Content>
        </Card>

    )
}

export default ImageCard;