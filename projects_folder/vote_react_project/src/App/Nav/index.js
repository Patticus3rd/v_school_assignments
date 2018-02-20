import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './index.css';

function Nav(props) {
    return (
        <div class='nav-container'>
            <Link className="link-wrapper" to="/">Home</Link>
            <Link className="link-wrapper" to="/democrats">Republican</Link>
            <Link className="link-wrapper" to="/republicans">Democrat</Link>
            
        </div>
    )
}

export default Nav;
