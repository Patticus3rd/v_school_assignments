import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import './index.css'


function ExCard(props) {
    let { primaryimageurl, venues, url, title, begindate, enddate, images } = props;
    return (
        <div>
            <Card className="xbtGroup">
                <Image src={primaryimageurl} />
                <Card.Content>
                    <a href={url}><Card.Header>{title}</Card.Header></a>
                    <Card.Meta>{begindate} - {enddate}</Card.Meta>
                    <Card.Description>{venues[0].name}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='copyright' />
                        {images[0].copyright}
                    </a>
                </Card.Content>
            </Card>
        </div>
    )
}

export default ExCard;
