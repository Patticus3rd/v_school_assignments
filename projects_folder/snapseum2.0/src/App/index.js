import React from 'react'
import { Switch, Route } from 'react-router-dom';
import UploadForm from './UploadForm';
import Filters from './Filters/index.js';


function App(props) {
    return (
        <div>
            <UploadForm />
            {/* <Filters /> */}
        </div>
    )
}

export default App;
