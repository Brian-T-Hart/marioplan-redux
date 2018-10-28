 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBo1ota2k4CqjrEodPd3rEq6eGu6vl8zAc",
    authDomain: "my-react-redux-marioplan.firebaseapp.com",
    databaseURL: "https://my-react-redux-marioplan.firebaseio.com",
    projectId: "my-react-redux-marioplan",
    storageBucket: "my-react-redux-marioplan.appspot.com",
    messagingSenderId: "1073966430595"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;