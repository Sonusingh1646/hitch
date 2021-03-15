import * as firebase from 'firebase';
import "firebase/auth" ;
require('firebase/firestore')
 
 const firebaseConfig ={
  
    apiKey: "AIzaSyBQRS1QFQpDBKxXTAwELE2J7COI0-tlf6g",
    authDomain: "hitchhiker-e8e9b.firebaseapp.com",
    projectId: "hitchhiker-e8e9b",
    storageBucket: "hitchhiker-e8e9b.appspot.com",
    messagingSenderId: "912099527940",
    appId: "1:912099527940:web:df55cee258174221431451",
    measurementId: "G-EX1R9KPR2Q"
  };


      firebase.initializeApp(firebaseConfig)
      const db= firebase.firestore()
      export default db;
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();