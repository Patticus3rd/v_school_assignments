import React, { Component } from 'react';
import { Form, Input, TextArea, Header, Button } from 'semantic-ui-react';
import Badge from './Badge/Badge'

class FormBadge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phone: "",
                favoriteFood: "",
                aboutMe: "",
            },
            badges: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearInputs = this.clearInputs.bind(this)
    }

    handleChange(e){
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                persons: {
                    ...prevState.persons,
                    [name]: value
                    
                }
            }
        })
    }

    clearInputs(){
        this.setState({
            persons: {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phone: "",
                favoriteFood: "",
                aboutMe: "",
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        let { persons, badges } = this.state;
        this.setState((prevState) => {
            return  {
                persons: {
                    ...prevState, persons
                },
                badges: [...badges, persons]
            }
                
        })
        this.clearInputs()
        console.log(badges)
    }

    render() {
        let { badges } = this.state;
        let { firstName, lastName, email, phone, favoriteFood, aboutMe, placeOfBirth } = this.state.persons;
        const personList = badges.map((badge, i) => {
            return <Badge key={i}{...badge}></Badge>
        })
        return (
            <div className='formWrapper'>
                <Form onSubmit={this.handleSubmit}>
                    <Header className='header'>Make A Badge!</Header>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} onChange={this.handleChange} name="firstName" value={firstName} label='First Name' placeholder='First name' />
                        <Form.Field control={Input} onChange={this.handleChange} name="lastName" value={lastName} label='Last Name' placeholder='Last name' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} onChange={this.handleChange} name="email" value={email} label='Email' placeholder='Email' />
                        <Form.Field control={Input} onChange={this.handleChange} name="placeOfBirth" value={placeOfBirth} label='Place Of Birth' placeholder='Place Of Birth' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} onChange={this.handleChange} name="phone" value={phone} label='Phone' placeholder='Phone' />
                        <Form.Field control={Input} onChange={this.handleChange} name="favoriteFood" value={favoriteFood} label='Favorite Food' placeholder='Favorite Food' />
                    </Form.Group>
                    <Form.Field control={TextArea} onChange={this.handleChange} name="aboutMe" value={aboutMe} label='About' placeholder='Tell us more about you...' />
                    <Form.Field control={Button}>Submit</Form.Field>
                </Form>
                
                {personList}
            </div>
        )
    }
}

export default FormBadge;