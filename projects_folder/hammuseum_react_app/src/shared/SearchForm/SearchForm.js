import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getArt } from '../../redux/art.js';




class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                key: ""
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
        let { getArt, push } = this.props;
        getArt(this.state.inputs)
    }

    render() {
        let { key } = this.state.inputs
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Field>
                            <Form.Input onChange={this.handleChange} name="key" value={key} placeholder="Search Here!" />
                            {/* <Form.Input onChange={this.handleChange} name="century" value={century} placeholder="century" /> */}
                            <Button>Click Me</Button>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default connect(null, { getArt })(SearchForm);