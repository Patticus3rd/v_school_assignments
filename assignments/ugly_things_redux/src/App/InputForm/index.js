import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addUgly } from '../../Redux/uglies.js';

class InputForm extends Component {
    constructor(props) {
        super(props);
        let { imgUrl, title, description } = props;
        this.state = {
            inputs: {
                imgUrl: imgUrl || "",
                title: title || "",
                description: description || "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var { addUgly, add } = this.props;
        if (add) {
            addUgly(this.state.inputs);
        }
    }

    render() {
        let { imgUrl, title, description } = this.state.inputs;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input onChange={this.handleChange} name="title" value={title} fluid label='Title' placeholder='Title' />
                        <Form.Input onChange={this.handleChange} name="imgUrl" value={imgUrl} fluid label='Img URL' placeholder='Img URL' />
                        <Form.Input onChange={this.handleChange} name="description" value={description} fluid label='Description'  placeholder='Description' />
                    </Form.Group>
                    <Button inline>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, { addUgly }) (InputForm);