import React from 'react';
import { Link} from 'react-router-dom';
import Exhibitions from '../Exhibitions';
import Collections from '../Collections'
import './index.css';



function NavBar(props) {
    return (
        <div class="navbar-container">
            <Link className="text-link" to="/">Home</Link>
            <Link className="text-link" to="/exhibitions" component={Exhibitions}>Exhibitions</Link>
            <Link className="text-link" to="/collections" component={Collections}>Collections</Link>
        </div>
    )
}



export default NavBar;
