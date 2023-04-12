// /plugins/firebase.js
import firebase from 'firebase'

let firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appID: "app-id",
}

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(config)
}

export const db = app.database()