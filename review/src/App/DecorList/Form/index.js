import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                size: props.size || "",
                color: props.color || "",
                type: props.type || ""
            }
        }
        this.handleChange =  this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        let { name, value } = e.target; 
        this.setState((prevState) => {
            return {
                inputs: {...prevState.inputs, [name]: value }
            }
        })
    }

    clearInputs(){
        this.setState({
            inputs: {
                size: "",
                color: "",
                type: ""
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submit(this.state.inputs, this.props.index);
        this.clearInputs();
    }
        
    render(){
        let { size, color, type } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="size">
                    Pick a size:
                <select name="size" id="size" value={size}>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="xl">XL</option>
                </select>
                </label>
                <input name="color"  onChange={this.handleChange} value={color} placeholder="color" type="text"/>
                <input name="type" onChange={this.handleChange} value={type} placeholder="type" type="text"/>
                <button>Add</button>
            </form>
        )
    }
}

export default Form;