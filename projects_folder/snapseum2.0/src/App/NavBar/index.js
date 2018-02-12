import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import { Menu } from 'semantic-ui-react';

function NavBar(props) {
    return (
        <div class="nav-wrapper">
        <Menu color='yellow' inverted>
             <Link to="/" >
             <Menu.Item name='home'>Home</Menu.Item>
             </Link>
            <Link to="/filters" >
            <Menu.Item name='filters'>Filters</Menu.Item>
            </Link>
            <Link to="/upload" textAlign="center">
            <Menu.Item name='upload'>Upload</Menu.Item>
            </Link>
            <Link to="/favorites" textAlign="center">
            <Menu.Item name='favorites'>Favorites</Menu.Item>
            </Link>
        </Menu>
        </div>
    )
}

export default NavBar;