export const singInGoogle = () => {
  // console.log('entro google');
  const provider = new firebase.auth.GoogleAuthProvider();
  // console.log(provider);
  return firebase.auth().signInWithPopup(provider);
};

export const singInFacebook = () => {
  // console.log('sign in facebook');
  const provider = new firebase.auth.FacebookAuthProvider();
  // console.log(provider);
  return firebase.auth().signInWithPopup(provider);
};

export const logOut = () => firebase.auth().signOut();

export const getUser = () => firebase.auth().currentUser;

// Authentication email and password with Firebase

export const eP = (email, pass) => firebase.auth().createUserWithEmailAndPassword(email, pass);

// Login with valid email and password
export const lp = (email, pass) => firebase.auth().signInWithEmailAndPassword(email, pass);
