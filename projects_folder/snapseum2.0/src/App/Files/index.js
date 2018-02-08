import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { firebaseConnect } from 'react-redux-firebase';

import { map } from 'lodash';
import axios from 'axios'
import { handleUpload } from '../../redux/actions/files.js';
import { connect } from 'react-redux';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fileUploading: false 
        }
    }

    toggleUploading = () => {
        this.setState({ fileUploading: !this.state.fileUploading })
    }

    onDrop = (files) => {
        const { dispatch } = this.props;
        this.toggleUploading();
        dispatch(handleUpload(files[0], this.toggleUploading));
    }

    render() {
        return (
            <div style={{ alignContent: 'center', justifyContent: 'center', padding: '2vh', }}>
                <Dropzone
                    accept="image/jpeg, image/png"
                    onDrop={this.onDrop}
                >
                </Dropzone>
            </div>
        );
    }
}

export default connect()(FileUpload);
