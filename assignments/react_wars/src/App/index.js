import React from 'react'
import Characters from '../App/Characters/'
import Cards from './Characters/Cards';
import { Switch, Route } from 'react-router-dom';
import './index.css';

function App(props) {
    return (
        <div className="page-wrapper">
            <Characters />
        <Switch>
            <Route path="/person/:id" component={Cards} />
        </Switch>
        </div>
    )
}

export default App;
