import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function NavBar(props){
    return(
        <div>
            <Link to="/"> Home </Link>
            <Link to="/services"> Services </Link>
            <Link to="/about"> About </Link>
        </div>
    )
}

export default NavBar;