import firebase from 'firebase'

// copy the config from the console https://console.firebase.google.com/u/0/project/sign-11111/settings/general/
var firebaseConfig = {
  apiKey: "AIzaSyC8g6DdxyNbtIqnX9fjdk3r9r4sG5xfn_M",
  authDomain: "e-learning-384002.firebaseapp.com",
  projectId: "e-learning-384002",
  storageBucket: "e-learning-384002.appspot.com",
  messagingSenderId: "324671022462",
  appId: "1:324671022462:web:620060a0d3e4fecdb3ff2f",
  measurementId: "G-Y350GPN65Y"
};
let app = null
// prevent initializing firebase more than once
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig )
}
// inject it so it can be accessed as this.$firebase inside the project
export const db = app.database()