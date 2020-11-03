const auth = () => firebase.auth();

export const singInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return auth().signInWithPopup(provider);
};

export const logOut = () => auth().signOut();

export const getUser = () => auth().currentUser;

// Authentication email and password with Firebase

export const createUserAccount = (email, password) => auth()
  .createUserWithEmailAndPassword(email, password);

// Login with valid email and password

export const loginUser = (email, password) => auth()
  .signInWithEmailAndPassword(email, password);

export const authListener = callbackfn => auth()
  .onAuthStateChanged(callbackfn);
