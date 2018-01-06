import React, { Component } from 'react';

class Pets extends Component {

    render() {
        const { name, breed } = this.props

        return (
            <div>
                <h3>Pet Name:{name}</h3>
                <h3>Pet Breed: {breed}</h3>

            </div>

        )
    }

}
export default Pets;