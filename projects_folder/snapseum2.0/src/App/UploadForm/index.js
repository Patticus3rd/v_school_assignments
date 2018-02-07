import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

//file import
import FileUpload from '../Files';
//redux imports
import { connect } from 'react-redux';
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
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addFilter =  this.addFilter.bind(this);
    }

    addFilter(filterName) {
        const inputs = {...this.state.inputs};
        const id = Date.now();
        inputs[id] = {
            id: id,
            filterName: filterName,
            filter: ""
        }
        this.setState({ inputs })
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
        debugger
        e.preventDefault();
        var { handleUpload, add } = this.props;
        if(add) {
            handleUpload(this.state.inputs)
        }
    }

    render() {
        let { codeName, codeArtist, codeSource, favorites } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input label="Filter Name" onChange={this.handleChange} name="codeName" value={codeName} />
                    <Form.Input label="Filter Artist" onChange={this.handleChange} name="codeArtist" value={codeArtist} />
                    <FileUpload value={codeSource} />
                    <Button>Publish!</Button>
                </Form.Group>
            </Form>
        )
    }
}

export default connect(null, { handleUpload })(UploadForm);