// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQhjlJPWpNft-8pkzGStLamS2XUb--IFA",
  authDomain: "vente-auto-auth.firebaseapp.com",
  projectId: "vente-auto-auth",
  storageBucket: "vente-auto-auth.appspot.com",
  messagingSenderId: "1008605656106",
  appId: "1:1008605656106:web:28db47c3be1a8216387f53",
  measurementId: "G-CPKZ3SKYRH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const messaging = getMessaging(app);

export const requestPermission = async () => {
  console.log("sendin request permission");
  Notification.requestPermission().then((permission) => {
    if(permission === "granted"){
      console.log("Notification permission granted.");
      return getToken(messaging, { vapidKey: "BMN0LJS3Mt-zN0nrATndzNO4iCJfuBqeaBnfE05KDBZ5vDOYdAVbtCcbhzYzQ66Rmr4XYPDjmgsvBjHC76ogEnE"})
      .then(currentToken => {
        if(currentToken){
          console.log("token client ", currentToken);
        }else{

        }
      }).catch(err =>{
        console.log("An error occured ", err);
      });
    }else{
      console.log("denied");
    }
  });
}

requestPermission();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });