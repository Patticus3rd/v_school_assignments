import React, { Component } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react';

class FormPage extends Component {
    constructor(props) {
        super(props);
        let { title, description, price, imgUrl, completed } = props;
        this.state = {
            inputs: {
                title: title || "",
                description: description || "",
                price: price || "",
                imgUrl: imgUrl || "",
                completed: completed || "",
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    clearInputs() {
        let { title, description, price, imgUrl, completed } = this.props;
        this.setState({
            inputs: {
                title: title || "",
                description: description || "",
                price: price || "",
                imgUrl: imgUrl || "",
                completed: completed || "",
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let todo = { ...this.state.inputs };
        todo.price = Number(this.state.inputs.price)
        this.props.submit(todo, this.props.id);
        this.props.clear ? this.clearInputs() : null;
    }

    handleChange(e) {
        let { name, value, checked, type } = e.target;
        name === "price" ? value = Number(value) : null;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        })
    }

    render() {
        let { title, description, price, imgUrl, completed } = this.state.inputs;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input onChange={this.handleChange} value={description} name="description" type="text" placeholder="description" />
                    <Form.Input onChange={this.handleChange} value={title} name="title" type="text" placeholder="title" />
                    <Form.Input onChange={this.handleChange} value={price} name="price" type="text" placeholder="price" />
                    <Form.Input onChange={this.handleChange} value={imgUrl} name="imgUrl" type="text" placeholder="imgUrl" />
                    <label htmlFor="completed">
                        Completed:
                <Checkbox onChange={this.handleChange} name="completed" checked={completed} id="completed" type="checkbox" />
                    </label>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}


export default FormPage;