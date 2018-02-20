import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addRep } from '../../../redux/demart.js'

class RepForm extends Component {
    constructor(props) {
        let { articleSource, articleTitle, comments, upvotes, downvotes, party } = props;
        super(props);
        this.state = {
            inputs: {
                articleTitle: articleTitle || "",
                articleSource: articleSource || "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        let { name, value } = e.target;
        console.log(e.target)
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(e){
        let { add, addRep } = this.props;
        e.preventDefault()
        if(add){
            addRep(this.state.inputs)
        }
    }

    clearInputs(){
        this.setState({
            inputes: {
                articleTitle: "",
                articleSource: ""
            }
        })
    }



    render() {
        let { party, articleSource, articleTitle } = this.state.inputs;
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input label='Rep Title' name='articleTitle' value={articleTitle} onChange={this.handleChange} placeholder='Rep Title Here..'/>
                    <Form.Input label='Rep Source' name='articleSource' value={articleSource} onChange={this.handleChange} placeholder='Rep Source Here..'/>
                </Form.Group>
            <Button>Submit Rep</Button>
            </Form>
            </div>
        )
    }
}
export default connect(null, ({addRep}))(RepForm);