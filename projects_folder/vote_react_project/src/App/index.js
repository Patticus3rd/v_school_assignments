import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Nav from './Nav';
import Dems from './Dems';
import './index.css';


function App() {
    return (
        <div class="app-wrapper">
           <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/republicans" component={Dems} />
            </Switch>
            <Nav />
        </div>
    )
}

export default App;