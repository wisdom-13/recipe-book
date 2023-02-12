import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_KEY,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function gooleLogin() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return { state: true, data: user };
    })
    .catch((error) => {
      return { state: false, message: error.message };
    });
}

export async function join(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return { state: true, data: user };
    })
    .catch((error) => {
      return { state: false, message: error.message };
    });
}

export async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return { state: true, data: user };
    })
    .catch((error) => {
      return { state: false, message: error.message };
    });
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    callback(user);
    // const updatedUser = user ? await adminUser(user) : null;
    // callback(updatedUser);

  });
}

