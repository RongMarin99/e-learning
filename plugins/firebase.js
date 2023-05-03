import firebase from 'firebase'
import 'firebase/firebase-messaging'


  // prevent initializing firebase more than once
  firebase.initializeApp({
    apiKey: "AIzaSyC8g6DdxyNbtIqnX9fjdk3r9r4sG5xfn_M",
    authDomain: "e-learning-384002.firebaseapp.com",
    projectId: "e-learning-384002",
    storageBucket: "e-learning-384002.appspot.com",
    messagingSenderId: "324671022462",
    appId: "1:324671022462:web:620060a0d3e4fecdb3ff2f",
    measurementId: "G-Y350GPN65Y"
  })

  // Vue.prototype.$firebase = firebase.messaging();
  // Vue.use(app)
  const messaging = firebase.messaging();
  // const public_key = 'BDuG8CJwb1nE0BAhEdQhjEAcD_dPzDfLuBXk6Yc_97JCux9KsFByFSbI14w5fQlmtff4kXEUSnY0WCUNXCm-sIg';
  // const token = messaging.getToken({ vapidKey: public_key })
  // console.log(token);
  messaging.onMessage(function (payload) {
    console.log('Receiving foreground message');
    console.log(payload)
    var notificationTitle = 'vue-cometchat-firebase';
    var notificationOptions = {
      body: payload.data.alert,
      icon: '',
    };

    var notification = new Notification(notificationTitle, notificationOptions);
    notification.onclick = function (event) {
      notification.close();
      console.log(event);
    };
  });

  export default firebase