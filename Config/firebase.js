import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDri0LAv15mug9g4kpHbcR5ZyTUKrdqT6c",
    authDomain: "public-safety-f4324.firebaseapp.com",
    databaseURL: "https://public-safety-f4324.firebaseio.com",
    projectId: "public-safety-f4324",
    storageBucket: "public-safety-f4324.appspot.com",
    messagingSenderId: "625115654490"
  };
  firebase.initializeApp(config);

  export default firebase;