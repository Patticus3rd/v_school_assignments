import React from 'react'
import { Switch, Route } from 'react-router-dom';
import UploadForm from './UploadForm';
import Home from '../pages/home.js';
import Filters from './Filters/index.js';
import NavBar from './NavBar'



function App(props) {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/filters" component={Filters} />
                <Route path="/upload" component={UploadForm} />
            </Switch>
        </div>
    )
}

export default App;
