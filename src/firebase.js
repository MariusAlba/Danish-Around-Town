import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

  var firebaseConfig = {
    apiKey: "AIzaSyCFRBeliEwa_7ll15ixPKQ_nth7pD_E8Pk",
    authDomain: "danish-around-town.firebaseapp.com",
    databaseURL: "https://danish-around-town.firebaseio.com",
    projectId: "danish-around-town",
    storageBucket: "danish-around-town.appspot.com",
    messagingSenderId: "745353892274",
    appId: "1:745353892274:web:7e0a96ee449d035edb94ab",
    measurementId: "G-RG7E0KTPXF"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

// const fire = firebase.initializeApp(firebaseConfig);

// export default fire;


export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();
export const database = firebase.firestore();
export const authProvider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();