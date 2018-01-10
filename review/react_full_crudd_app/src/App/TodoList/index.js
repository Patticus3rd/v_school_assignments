import React, { Component } from 'react';
import axios from 'axios';
import LoadingPage from '../shared/Loading';
import { Link, Route, Switch } from 'react-router-dom';
import FormPage from '../shared/FormPage';
import TodoItem from '../TodoList/TodoItem';
import './index.css';
let todoUrl = "https://api.vschool.io/patrickseiuli/todo/";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            loading: true,
        }
        this.addTodo = this.addTodo.bind(this)
    }

    componentDidMount() {
        axios.get(todoUrl)
            .then((response) => {
                let { data } = response;
                this.setState({
                    todos: data,
                    loading: false,
                })
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    todos: [],
                    loading: false
                })
            })
    }

    addTodo(todo){
        axios.post(todoUrl, todo)
        .then((response) => {
            let { data } = response;
            this.setState((prevState) => {
                let newTodos = [...prevState.todos, data];
                return {
                    todos: newTodos
                }
            })
        })
        .catch((err) =>{
            console.log(err);
            this.setState({})
        })
    }
    

    render() {
        let { todos, loading } = this.state;
        return (
            loading ?
                <LoadingPage />
                :
                <div>
                    <FormPage submit={this.addTodo} clear />
                    <div className="todo-sidebar">
                        {todos.map((todo) => {
                            let { title, _id } = todo;
                            return <Link to={`/todos/${_id}`} key={_id}>{title}</Link>
                        })}
                    </div>
                </div>
        )
    }
}
export default TodoList;