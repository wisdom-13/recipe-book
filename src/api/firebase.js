import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_KEY,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export function gooleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user)
    }).catch(console.error);
}

export function login(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log(user);
    })
    .catch(console.error);
}

