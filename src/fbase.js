import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJD3_YXf3DFkp7mvy42vFS5rn-BPbgdlc",
  authDomain: "nwitter-1f31d.firebaseapp.com",
  projectId: "nwitter-1f31d",
  storageBucket: "nwitter-1f31d.appspot.com",
  messagingSenderId: "1016589843212",
  appId: "1:1016589843212:web:fb7149a063f9cc2495a729",
};
firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
