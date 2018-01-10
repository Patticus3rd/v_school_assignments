import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Service from '../pages/Service';
import About from '../pages/About';
import NavBar from './NavBar';


function App(props){
    return(
        <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/services/:index" component={Service} />
        </Switch>
        </div>
    )
}
export default App;