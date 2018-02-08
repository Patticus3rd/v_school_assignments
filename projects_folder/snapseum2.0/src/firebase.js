import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAFUtPWo5b5kYctdTuL2e29Bu7sNzlcDsc",
    authDomain: "snapseum.firebaseapp.com",
    databaseURL: "https://snapseum.firebaseio.com",
    projectId: "snapseum",
    storageBucket: "snapseum.appspot.com",
    messagingSenderId: "778215507519"
  };
  firebase.initializeApp(config)

  export const database = firebase.database().ref('/posts');