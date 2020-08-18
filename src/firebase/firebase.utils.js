import firebase from "firebase/app";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhUUNA_qGKhVrfVq8M-Sbsp-rOCYePCTM",
  authDomain: "todo-project-12fac.firebaseapp.com",
  databaseURL: "https://todo-project-12fac.firebaseio.com",
  projectId: "todo-project-12fac",
  storageBucket: "todo-project-12fac.appspot.com",
  messagingSenderId: "264696537910",
  appId: "1:264696537910:web:47cf92a0b88dcc3160c997",
  measurementId: "G-VVE62TJXHK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
