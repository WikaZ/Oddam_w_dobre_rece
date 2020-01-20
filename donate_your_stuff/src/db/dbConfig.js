
import *  as firebase from 'firebase';

require("firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyBGXAhIepZ5npmXmV0WYTuwTg0q-DUBdso",
    authDomain: "donate-your-staff.firebaseapp.com",
    databaseURL: "https://donate-your-staff.firebaseio.com",
    projectId: "donate-your-staff",
    storageBucket: "donate-your-staff.appspot.com",
    messagingSenderId: "426385093003",
    appId: "1:426385093003:web:cdb7f59e11ae0d04c63f8e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export var db = firebase.firestore();
var dbRef = firebase.database().ref("MojeFaktury");
console.log(dbRef, "dbref");
