import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Services from ''
import Home from '../pages/Home';
import About from '../pages/About';
import NavBar from './NavBar';
import Header from './Header';

function App(props) {
    return (
        <div class="app-wrapper">
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    )
}

export default App;