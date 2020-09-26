export const singInGoogle = () => {
  // console.log('entro google');
  const provider = new firebase.auth.GoogleAuthProvider();
  // console.log(provider);
  return firebase.auth().signInWithPopup(provider);
};

export const userSesionActive = (callback) => {
  const userCurrent = firebase.auth().currentUser;
  return callback(userCurrent);
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

export const createUserAccount = (email, password) => {
  const auth = firebase.auth();
  return auth.createUserWithEmailAndPassword(email, password);
};
// Login with valid email and password

export const login = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};
