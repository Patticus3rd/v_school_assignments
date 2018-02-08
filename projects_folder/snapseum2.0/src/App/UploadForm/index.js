import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { database } from '../../firebase';
import _ from 'lodash';
//file import
import FileUpload from '../Files';
//redux imports
import { handleUpload } from '../../redux/actions/files.js';

class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                codeName: "",
                codeSource: "",
                codeArtist: "",
                favorites: false,
            },
            posts: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
    }
    //need to us .on with value as a paramter
    componentDidMount(){
        database.on('value', preview => {
            this.setState({
                posts: preview.val()
            })
    })};

    renderPosts() {
        return _.map(this.state.posts,(post, key) => {
            return (
            <div key={key}>
                <h3>{post.codeName}</h3>
                <p>{post.codeSource}</p>
            </div>)
        })
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
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { codeName, codeSource, codeArtist, favorites } = this.state.inputs;
        const filter = {
            title: codeName,
            artist: codeArtist
        }
        database.push(filter);
    }

    render() {
        let { codeName, codeArtist, codeSource, favorites } = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input label="Filter Name" onChange={this.handleChange} name="codeName" value={codeName} />
                        <Form.Input label="Filter Artist" onChange={this.handleChange} name="codeArtist" value={codeArtist} />
                        <FileUpload value={codeSource} />
                        <Button>Publish!</Button>
                    </Form.Group>
                </Form>
                <br />
                {this.renderPosts()}
            </div>
        )
    }
}

export default UploadForm;