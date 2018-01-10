import React from 'react'
import services from '../../shared/services.json'

function Service(props) {
    let { index } = props.match.params
    let { name, price, description } = services[index];

    return (
        <div>
            <h1>{name}</h1>
            <h2>Price: ${price}</h2>
            <h3>{description}</h3>
        </div>
    )
}

export default Service;