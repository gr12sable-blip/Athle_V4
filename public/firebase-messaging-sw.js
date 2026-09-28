importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCeSX-JBBOH38_KDBJ9b0CVDeEzRgPqIYA",
  authDomain: "athle-8ab39.firebaseapp.com",
  projectId: "athle-8ab39",
  storageBucket: "athle-8ab39.firebasestorage.app",
  messagingSenderId: "794846952754",
  appId: "1:794846952754:web:23fac2106a95a68bacab2b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon-192.png'
  });
});