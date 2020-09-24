export const singInGoogle = () => {
  console.log('entro google');
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log(provider);
  return firebase.auth().signInWithPopup(provider);
};

export const userSesionActive = (callback) => {
  const userCurrent = firebase.auth().currentUser;
  if (userCurrent) {
    return callback(userCurrent)
  } else {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        return callback(user)
        // User is signed in.
      } else {
        // No user is signed in.
        return callback(null);
      }
    });
    unsubscribe()
  }
}

export const singInFacebook = () => {
  console.log('sign in facebook');
  const provider = new firebase.auth.FacebookAuthProvider();
  console.log(provider);
  return firebase.auth().signInWithPopup(provider);
};

export const logOut = () => firebase.auth().signOut();


