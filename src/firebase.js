import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDlil-XadVBITCvsuDXI63kjze4SmN8Hzg",
  authDomain: "messenger-e555d.firebaseapp.com",
  databaseURL: "https://messenger-e555d.firebaseio.com",
  projectId: "messenger-e555d",
  storageBucket: "messenger-e555d.appspot.com",
  messagingSenderId: "457376173616",
  appId: "1:457376173616:web:fbc9336cc125697b3da7f5",
  measurementId: "G-BN49W6WMNP",
});

const db = firebaseApp.firestore();

export default db;
