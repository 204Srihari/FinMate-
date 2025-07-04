// public/js/firebaseConfig.js

// Firebase v10 (compat) – browser-friendly
const firebaseConfig = {
    apiKey: "AIzaSyBqh77-Izs_IKKTRCbUx5JJABcRQpZEoCk",
    authDomain: "webdev-59cc2.firebaseapp.com",
    projectId: "webdev-59cc2",
    storageBucket: "webdev-59cc2.appspot.com",
    messagingSenderId: "252485754460",
    appId: "1:252485754460:web:66ec2c905c978c7f7ed099",
    measurementId: "G-3RJDBQX73Q"
  };
  
  // Initialize Firebase App
  firebase.initializeApp(firebaseConfig);
  
  // Make Auth and Firestore accessible globally
  window.auth = firebase.auth()
  window.db = firebase.firestore();
  