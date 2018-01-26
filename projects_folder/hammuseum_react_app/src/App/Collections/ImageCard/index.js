import React from 'react'
import { Image, Card } from 'semantic-ui-react';

function ImageCard(props) {
    let { primaryimageurl, title, dated, creditline } = props;
    return (
        <Card>
            <Image src={primaryimageurl} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='copyright'>
                        Dated: {dated}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {creditline}
                </Card.Description>
            </Card.Content>
        </Card>

    )
}

export default ImageCard;