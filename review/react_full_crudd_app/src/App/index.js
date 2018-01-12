import React from 'react';
import { Header } from 'semantic-ui-react';
import { Switch, Route, Link } from 'react-router-dom';
import TodoList from '../App/TodoList';
import TodoItem from './TodoList/TodoItem';

function App() {
    return (
        <div>
            <Link to="/"> <Header>My ToDo List</Header></Link>
            <Switch>
                <Route exact path = "/" component={TodoList} />
                <Route path="/todos/:id" component={TodoItem} ></Route>
            </Switch>
        </div>
    )
}

export default App;