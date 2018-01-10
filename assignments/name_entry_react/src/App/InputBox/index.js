import React, { Component } from 'react';
import './inputBox.css';

class InputBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: "",
            things: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let { value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: value
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let { inputs } = this.state;
        this.setState((prevState) => {
            return { things: [ inputs, ...prevState.things] }
        })
    
    }


    render() {

        let { inputs, things } = this.state;
        return (
            <div className="centerstuff">
                <h1>{inputs}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" value={inputs} onChange={this.handleChange} type="text" />
                    <button>Add</button>
                    <ul>
                       {things.map((thing, i) => <li key={i}>{thing}</li>)}
                    </ul>
                </form>

                <footer>
                    <p>&copy;2018</p>
                </footer>
            </div>
        )
    }
}


export default InputBox;