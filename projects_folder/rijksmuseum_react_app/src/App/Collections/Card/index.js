import React from 'react'
import { Image } from 'semantic-ui-react';

function Card(props) {
    let { baseimageurl } = props;
    return (
        <div>
            <Image src={baseimageurl}></Image>
        </div>
    )
}

export default Card;