import React from 'react';
import { Card, Button } from 'semantic-ui-react';


function BountyCard(props){
 let { lastName, firstName, living, bountyAmount, force, removeBounty  } = props;
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
                    <Button color='red' onClick={ ()=> removeBounty()}>Delete</Button>
                </Card>
            </div>
        )

}

export default BountyCard;
