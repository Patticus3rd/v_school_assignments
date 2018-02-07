import { setFlash } from './flash';
import axios from 'axios';

let snapURL = "http://localhost:9000/snapcodes";

export const handleUpload = (file, callback) => {
    return(dispatch) => {
        debugger
        let data =  new FormData(file);
        data.append(1, file);
        axios.post(snapURL, data)
        .then( res => {
            dispatch(setFlash('Snapcode Uploaded Successfully!', 'success'));
        })
        .then( () => {
            callback()
        })
        .catch( res => {
            dispatch(setFlash('Snapcode Not Uploaded', 'error'))
        })
    }
}