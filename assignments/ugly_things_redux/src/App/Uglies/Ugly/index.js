import React from 'react'
import { connect } from 'react-redux';
import { Image, Card } from 'semantic-ui-react';
import Form from '../../InputForm';

function Ugly(props) {
    let { title, imgUrl, description } = props;
    return (
        <Card>
            <Image src={imgUrl} />
            <Card.Content>
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Description>
                    {description}
      </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Ugly;
