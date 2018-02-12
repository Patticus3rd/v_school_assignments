import React from 'react'
import { Switch, Route } from 'react-router-dom';
import UploadForm from './UploadForm';
import Home from '../pages/home.js';
import Filters from './Filters/index.js';
import NavBar from './NavBar'
import Favorites from './Favorites';
import { addFilter } from '../redux/filters.js'; 



function App(props) {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/filters" component={Filters} />
                <Route path="/upload" render={(props) => <UploadForm {...props} add={addFilter} />} />
                <Route path="/favorites" component={Favorites} />
            </Switch>
        </div>
    )
}

export default App;
