import React, { Component } from 'react';
import Pets from '../Pets/Pets.js';

class Friends extends Component {
    render(){
        const { name, age, pets, } = this.props;
        return(
            <div>
                <h2>Name: {name}</h2>
                <h2> Age: {age}</h2>
                {pets.map((pet) => {
                    return (
                        <Pets
                            petName = {pet.name}
                            breed = {pet.breed}>
                        </Pets>
                    )
                })}
            </div>
        )
    }
}

export default Friends;
