import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import './index.css'


function ExCard(props) {
    let { images, venues, url, title, begindate, enddate } = props;
    return (
        
            <Card className="xbtGroup">
                <Image src={images[0].baseimageurl} />
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
        
    )
}

export default ExCard;
