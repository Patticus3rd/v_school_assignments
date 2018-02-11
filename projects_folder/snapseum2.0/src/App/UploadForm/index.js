import React, { Component } from 'react';
import firebase from 'firebase';
import { database } from '../../firebase';
import { connect } from 'react-redux';
import { addFilter } from '../../redux/filters';
import FileUploader from 'react-firebase-file-uploader';
import { Form, Button, Image } from 'semantic-ui-react';

const imgFilter = firebase.storage().ref('images')

class UploadForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterName: '',
      filter: '',
      filterArtist: '',
      isUploading: false,
      progress: 0,
      filterURL: '',
    }
    this.clearInputs = this.clearInputs.bind(this)
  }

  handleChangefilterName = (event) =>
    this.setState({ filterName: event.target.value });

  handleChangefilterArtist = (event) =>
    this.setState({ filterArtist: event.target.value });

  handleUploadStart = () =>
    this.setState({ isUploading: true, progress: 0 });

  handleProgress = (progress) =>
    this.setState({ progress });

  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    this.setState({
      filter: filename,
      progress: 100,
      isUploading: false,
    });
    imgFilter.child(filename).getDownloadURL()
      .then(url => this.setState({ filterURL: url })
      )
  };

  handleSubmit = (e) => {
    this.setState({
      progress: 100,
      isUploading: false,
    });
    e.preventDefault();
    let { add, addFilter } = this.props;
    if (add) {
      addFilter(this.state)
      this.clearInputs()
    }
  }
  clearInputs = () => {
    this.setState({
        filterName: '',
        filter: '',
        filterArtist: '',
        isUploading: false,
        progress: 0,
        filterURL: '',
    })
  }

  

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label>Filter Name:</label>
          <input type="text" value={this.state.filterName} name="filterName" onChange={this.handleChangefilterName} />
          <label>Filter Artist:</label>
          <input type="text" value={this.state.filterArtist} name="filterArtist" onChange={this.handleChangefilterArtist} />
          <label>Image:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.filterURL &&
            <Image src={this.state.filterURL} />
          }
          <FileUploader
            accept="image/*"
            name="image"
            filename={file => this.state.filterName}
            storageRef={imgFilter}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, ({ addFilter}))(UploadForm);
