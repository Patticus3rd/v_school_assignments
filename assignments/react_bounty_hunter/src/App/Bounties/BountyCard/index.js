import React from 'react';
import { Card, Button } from 'semantic-ui-react';


function BountyCard(props) {
    let { firstName, lastName, bountyAmount, force } = props;
    return (
        <div>
            <Card>
                <Card.Header size='md'>
                    {lastName + ',' + ' ' + firstName}
                </Card.Header>
                <Card.Meta description={bountyAmount}>
                    <span>
                        Bounty: {bountyAmount}
                    </span>
                </Card.Meta>
                <Card.Description>Target is currently {force}</Card.Description>
            </Card>
        </div>
    )
}

export default BountyCard;
