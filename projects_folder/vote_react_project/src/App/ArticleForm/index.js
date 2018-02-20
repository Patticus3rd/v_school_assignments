import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addArticle } from '../../redux/articles.js'

class ArticleForm extends Component {
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
        let { add, addArticle } = this.props;
        e.preventDefault()
        if(add){
            addArticle(this.state.inputs)
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
                    <Form.Input label='Article Title' name='articleTitle' value={articleTitle} onChange={this.handleChange} placeholder='Article Title Here..'/>
                    <Form.Input label='Article Source' name='articleSource' value={articleSource} onChange={this.handleChange} placeholder='Article Source Here..'/>
                </Form.Group>
            <Button>Submit Article</Button>
            </Form>
            </div>
        )
    }
}
export default connect(null, ({addArticle}))(ArticleForm);