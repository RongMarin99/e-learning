importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
)
firebase.initializeApp({
  apiKey: "AIzaSyC8g6DdxyNbtIqnX9fjdk3r9r4sG5xfn_M",
  authDomain: "e-learning-384002.firebaseapp.com",
  projectId: "e-learning-384002",
  storageBucket: "e-learning-384002.appspot.com",
  messagingSenderId: "324671022462",
  appId: "1:324671022462:web:620060a0d3e4fecdb3ff2f",
  measurementId: "G-Y350GPN65Y"
})
const messaging = firebase.messaging()
messaging.onBackgroundMessage(() => {
  console.log("tesing sevice worker")
  // Customize notification here
  const notificationTitle = 'vue-cometchat-firebase';
  const notificationOptions = {
    body: 'Background Message body.',
  //   icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"http:\u002F\u002Flocalhost:1200\u002Flogin"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
