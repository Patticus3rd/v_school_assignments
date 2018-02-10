import React, { Component } from 'react';
import firebase from 'firebase';
import { database } from '../../firebase';
import FileUploader from 'react-firebase-file-uploader';



const imgFilter = firebase.storage().ref('images')


class UploadForm extends Component {
  state = {
    filterName: '',
    filter: '',
    isUploading: false,
    progress: 0,
    filterURL: '',
    };
  

  sendURL = () => {
    var postKey = database.snapshot.downloadUR
  }


  handleChangefilterName = (event) =>
    this.setState({ filterName: event.target.value });

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
      .then(url => this.setState({ filterURL: url }))
      this.sendURL()
    };

  render() {
    return (
      <div>
        <form>
          <label>Filter Name:</label>
          <input type="text" value={this.state.filterName} name="filterName" onChange={this.handleChangefilterName} />
          <label>Image:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.filterURL &&
            <img src={this.state.filterURL} />
          }
          <FileUploader
            accept="image/*"
            name="image"
            filename={file => this.state.filterName }
            storageRef={imgFilter}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UploadForm;
