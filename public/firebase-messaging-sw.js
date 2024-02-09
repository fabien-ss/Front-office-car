importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "1008605656106"
})

const initMessaging = firebase.messaging();