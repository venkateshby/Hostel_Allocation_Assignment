import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

// Use your config values here.
firebase.initializeApp({
    apiKey: "AIzaSyBz_EBdzM3sqbbwqWBeWArgxQ7smt9reTM",
    authDomain: "hostel-allocation-assign-b0013.firebaseapp.com",
    projectId: "hostel-allocation-assign-b0013",
    storageBucket: "hostel-allocation-assign-b0013.appspot.com",
    messagingSenderId: "671491148112",
    appId: "1:671491148112:web:e338fe9ac8d6890ffac455",
    measurementId: "G-EPPSYYD9PC"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);