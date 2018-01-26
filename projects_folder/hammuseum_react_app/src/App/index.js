import React from 'react'
import SearchForm from '../shared/SearchForm/SearchForm.js';
import Collections from '../App/Collections';
import NavBar from './NavBar'
import { Switch, Route } from 'react-router-dom';

import Home from '../shared/Home';
import Exhibitions from './Exhibitions';


function App(props) {
    return (
        <div>
        <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/exhibitions" component={Exhibitions}/>
                <Route path="/collections" component={Collections}/>
            </Switch>
           
        </div>
    )
}

export default App;
