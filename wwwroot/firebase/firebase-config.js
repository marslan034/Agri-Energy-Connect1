// wwwroot/firebase/firebase-config.js

// Importing as a module won't work directly in MVC, so use compat instead
const firebaseConfig = {
    apiKey: "AIzaSyBKOSI30CdcSELk9aPIrOJsyFa39dwbjbo",
    authDomain: "agri-energy-connect-31198.firebaseapp.com",
    projectId: "agri-energy-connect-31198",
    storageBucket: "agri-energy-connect-31198.firebasestorage.app",
    messagingSenderId: "506123402790",
    appId: "1:506123402790:web:cc080d3e7ab50d5c16b0e7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
