import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD443VduNJn85Bf5-0VLEFS1ilrbeqLgyA",
    authDomain: "paytm-status-fb49e.firebaseapp.com",
    projectId: "paytm-status-fb49e",
    storageBucket: "paytm-status-fb49e.appspot.com",
    messagingSenderId: "843536201046",
    appId: "1:843536201046:web:1ff172a6c72a08305452f7",
    measurementId: "G-GYP1W8F736"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore()


export {db};