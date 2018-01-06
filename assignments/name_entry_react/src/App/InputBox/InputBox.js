import React, { Component } from 'react';
import './inputBox.css';

class InputBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let { value } = e.target;
        this.setState((prevState) => {
            return {
                input: value
            }
        })
    }

    render() {
        let { input } = this.state;
        return (
            <div className="centerstuff">
                <h1>{input}</h1>
                <form>
                    <input name="name" value={input} onChange={this.handleChange} type="text" />
                    <button>Add</button>
                </form>
                <footer>
                    <p>&copy;2018</p>
                </footer>
            </div>
        )
    }
}


export default InputBox;