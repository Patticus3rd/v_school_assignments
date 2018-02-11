import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import { Menu } from 'semantic-ui-react';

function NavBar(props) {
    return (
        <Menu color='yellow' inverted fluid className="nav-wrapper">
             <Link to="/" textAlign="center">
             <Menu.Item fluid name='home'>Home</Menu.Item>
             </Link>
            <Link to="/filters" textAlign="center">
            <Menu.Item fluid name='filters'>Filters</Menu.Item>
            </Link>
            <Link to="/upload" textAlign="center">
            <Menu.Item fluid name='upload'>Upload</Menu.Item>
            </Link>
        </Menu>
    )
}

export default NavBar;