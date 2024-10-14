// src/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBn-8xcyvvQEf4D7tlQwMTwFfr8QQI8z6Q",
  authDomain: "autoescolapiloto-adaa2.firebaseapp.com",
  projectId: "autoescolapiloto-adaa2",
  storageBucket: "autoescolapiloto-adaa2.appspot.com",
  messagingSenderId: "398229627593",
  appId: "1:398229627593:web:0ce5c15623cf961cdf6318"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db };
