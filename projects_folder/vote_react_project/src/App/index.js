import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Nav from './Nav';
import Dems from './Dems';
import Reps from './Reps';
import ArticleForm from './ArticleForm';
import { addArticle } from '../redux/articles.js'
import { addRep } from '../redux/demart.js'
import RepForm from '../App/Reps/RepForm';
import './index.css';


function App() {
    return (
        <div class="app-wrapper">
        <Nav />
           <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/republicans" component={Dems} />
                <Route path="/democrats" component={Reps} />
                <Route path="/daform" render={(props) => <ArticleForm {...props} add={addArticle} />}  />
                <Route path="/repform" render={(props) => <RepForm {...props} add={addRep} />}  />
            </Switch>
        </div>
    )
}

export default App;