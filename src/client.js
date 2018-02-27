import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyC_1wCn-PWMnkpvVDh1zAUsB61U6cqaiwk",
    authDomain: "meetat-6dc1e.firebaseapp.com",
    databaseURL: "https://meetat-6dc1e.firebaseio.com",
    projectId: "meetat-6dc1e",
    storageBucket: "gs://meetat-6dc1e.appspot.com",
    messagingSenderId: "1056169124829"
  };
  firebase.initializeApp(config);
  
export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();