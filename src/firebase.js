import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJ4yLoQZDA_NvFijeQzrw8LbzvEktN-ZA",
  authDomain: "linkedin-clone-72c31.firebaseapp.com",
  projectId: "linkedin-clone-72c31",
  storageBucket: "linkedin-clone-72c31.firebasestorage.app",
  messagingSenderId: "282502956943",
  appId: "1:282502956943:web:1dd7e6b51eabcbdc256dfa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
