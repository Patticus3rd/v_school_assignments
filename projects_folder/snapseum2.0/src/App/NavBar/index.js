import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import { Menu } from 'semantic-ui-react';

function NavBar(props) {
    return (
        <div class="nav-wrapper">
            <Link className='link-text' to="/" >Home</Link>
            <Link className='link-text' to="/filters">Filters</Link>
            <Link className='link-text' to="/upload">Upload</Link>
            <Link className='link-text' to="/favorites">Favorites</Link>
        </div>
    )
}

export default NavBar;

