import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import EditForm from './EditForm';


function BountyCard(props){
 let { lastName, firstName, living, bountyAmount, force, index, removeBounty  } = props;
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
                    <Button color='red' onClick={ ()=> removeBounty(index)}>Delete</Button>
                    <EditForm {...props}></EditForm>
                </Card>
            </div>
        )

}

export default BountyCard;
