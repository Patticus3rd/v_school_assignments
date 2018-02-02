import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './index.css';



class BountyForm extends Component {
    constructor(props) {
        super(props);
        let { firstName, lastName, bountyAmount, force, living } = props;
        this.state = {
            inputs: {
                firstName: firstName || "",
                lastName: lastName || "",
                living: living || true,
                bountyAmount: bountyAmount || "",
                force: force || "Sith"
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let { name, value, checked, type } = e.target;
        name === "bountyAmount" ? value = Number(value) : null;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        })
    }

    clearInputs() {
        let { firstName, lastName, bountyAmount, living, force } = this.props;
        this.setState({
            inputs: {
                firstName: firstName || "",
                lastName: lastName || "",
                living: living || true,
                bountyAmount: bountyAmount || "",
                force: force || "Sith"
            }
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        let bounty = { ...this.state.inputs };
        bounty.bountyAmount = Number(this.state.inputs.bountyAmount)
        this.props.submit(bounty, this.props.id);
        this.props.clear ? this.clearInputs() : null;
    }


    render() {
        let { firstName, lastName, bountyAmount, living } = this.state.inputs;
        const options = [
            { key: 's', text: 'Sith', value: 'sith' },
            { key: 'j', text: 'Jedi', value: 'jedi' }
        ]
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input onChange={this.handleChange} value={firstName} name="firstName" width={3} fluid label="First Name" placeholder="First Name" />
                    <Form.Input onChange={this.handleChange} value={lastName} name="lastName" width={3} fluid label="Last Name" placeholder="Last Name" />
                    <Form.Input onChange={this.handleChange} value={bountyAmount} name="bountyAmount" width={3} fluid label="Bounty" placeholder="Bounty" />
                </Form.Group>
                <Form.Group inline>
                    <label htmlFor="living">
                        Alive:
                <Form.Checkbox onChange={this.handleChange} name="living" checked={living} id="living" type="checkbox" />
                    </label>
                    <Form.Select width={3} fluid label='Force' options={options} placeholder='Force' />
                    <Form.Button>Submit</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}

export default BountyForm;