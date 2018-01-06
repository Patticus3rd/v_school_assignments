import React from 'react';
import vader from './vader-puppy.jpg';

function InBetween() {
    return(
        <div>
            <p>Welcome to the Evil Lair, I have a lot of cool things to do. Click Below:</p>
            <button>Game Room</button>
            <br />
            <button>Torture Room</button>
            <br />
            <button>Puppy Play Room</button>
            <br />
            <h3>Click Below To Pet My Puppy Lair</h3>
            <br />
            <button onClick= {alert("Click OK if you are Pro Darth Vader or like cookies")}>
            <img src={vader} alt="Darth Dog"/>
            </button>
        </div>
    )
}

export default InBetween;