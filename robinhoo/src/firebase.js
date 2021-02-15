import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCdGeGjqAV8LfgUh0L-KTwmFGwr2xlNipA",
    authDomain: "robinhood-90612.firebaseapp.com",
    projectId: "robinhood-90612",
    storageBucket: "robinhood-90612.appspot.com",
    messagingSenderId: "250657042420",
    appId: "1:250657042420:web:2a551746285d0f279ad3a1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export { db };