import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyArIKuIVjwIHGUfwS7tIAmH56GIc2HjFYE",
    authDomain: "chatapp-59159.firebaseapp.com",
    databaseURL: "https://chatapp-59159.firebaseio.com",
    projectId: "chatapp-59159",
    storageBucket: "chatapp-59159.appspot.com",
    messagingSenderId: "399809868138",
    appId: "1:399809868138:web:261c1845ede61195657513",
    measurementId: "G-J2WNPBQXMN"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;