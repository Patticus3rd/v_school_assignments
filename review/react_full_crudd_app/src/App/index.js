import React from 'react';
import { Header } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import TodoList from '../App/TodoList';
import TodoItem from './TodoList/TodoItem';

function App() {
    return (
        <div>
            <Header as="h1"> My ToDo List</Header>
            <Switch>
                <Route exact path = "/" component={TodoList} />
                <Route path="/todos/:id" component={TodoItem} ></Route>
            </Switch>
        </div>
    )
}

export default App;