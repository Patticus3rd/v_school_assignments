import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        let { value, name } = e.target;
        this.setState((prevState) => {
            return {
                inputs:{
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let { username } = this.state.inputs;
        alert(`Welcome to my Awesome App ${username}!!`)
    }

    render() {
        let { username, password } = this.state.inputs;
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={username} onChange={this.handleChange} name="username" type="text" placeholder="username"/>
                <input value={password} onChange={this.handleChange} name="password" type="password" placeholder="password"/>
                <button>Submit</button>
            </form>
        )
    }
}

export default SignUpForm;