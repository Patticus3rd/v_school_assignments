import React from 'react';
import { Link} from 'react-router-dom';
import Exhibitions from '../Exhibitions';
import Collections from '../Collections'
import './index.css';



function NavBar(props) {
    return (
        <div class="navbar-container">
            <Link to="/">Home</Link>
            <Link to="/exhibitions" component={Exhibitions}>Exhibitions</Link>
            <Link to="/collections" component={Collections}>Collections</Link>
        </div>
    )
}

export default NavBar;
