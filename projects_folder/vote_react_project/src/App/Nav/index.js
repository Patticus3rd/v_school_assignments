import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Dems from '../Dems';

function Nav(props) {
    return (
        <div>
            <Link className="link-wrapper" to="/">Home</Link>
            <Link className="link-wrapper" to="/democrats">Republican</Link>
            <Link className="link-wrapper" to="/republicans">Democrat</Link>
        </div>
    )
}

export default Nav;
