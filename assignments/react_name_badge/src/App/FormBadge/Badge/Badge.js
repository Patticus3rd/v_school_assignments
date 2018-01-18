import React from 'react'
import { Segment, Grid } from 'semantic-ui-react';

function Badge(props) {
    let { firstName, lastName, email, placeOfBirth, phone, favoriteFood, aboutMe } = props;
    return (
        <div>
            <Segment textAlign='center' inverted size='massive' color='red'>
              Hello!
            </Segment>
            <Grid columns={2}>
                <Grid.Row>
                <Grid.Column>First Name: {firstName}</Grid.Column>
                <Grid.Column>Last Name: {lastName}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>Email: {email}</Grid.Column>
                <Grid.Column>Place of Birth: {placeOfBirth}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>Phone: {phone}</Grid.Column>
                <Grid.Column>Favorite Food: {favoriteFood}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>About Me: {aboutMe}</Grid.Column>
                </Grid.Row>
            </Grid>
           
        </div>
    )
}

export default Badge;
