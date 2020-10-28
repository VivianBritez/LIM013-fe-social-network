import { auth } from './firebase-init.js';

export const singInGoogle = () => {
  // console.log('entro google');
  const provider = new firebase.auth.GoogleAuthProvider();
  // console.log(provider);
  return auth.signInWithPopup(provider);
};

export const singInFacebook = () => {
  // console.log('sign in facebook');
  const provider = new firebase.auth.FacebookAuthProvider();
  // console.log(provider);
  return auth.signInWithPopup(provider);
};

export const logOut = () => auth.signOut();

export const getUser = () => auth.currentUser;

// Authentication email and password with Firebase

export const createUserAccount = (email, password) => auth
  .createUserWithEmailAndPassword(email, password);

// Login with valid email and password

export const loginUser = (email, password) => auth
  .signInWithEmailAndPassword(email, password);

export const authListener = (callbackfn) => auth
  .onAuthStateChanged(callbackfn);
