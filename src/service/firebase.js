import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyApT81077pMounxCIyvbCrFM1octl-NJJo",
  authDomain: "ngoctriapple-23c7d.firebaseapp.com",
  projectId: "ngoctriapple-23c7d",
  storageBucket: "ngoctriapple-23c7d.appspot.com",
  messagingSenderId: "209222401742",
  appId: "1:209222401742:web:ecdc21cdf5f10aecd11a9f",
  measurementId: "G-EMFNGBD3QT",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
