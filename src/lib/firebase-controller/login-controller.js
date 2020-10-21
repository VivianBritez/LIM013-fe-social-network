import { readUserDB, createUserDB } from '../firebase/firestore.js';
import { singInGoogle, loginUser } from '../firebase/auth.js';

export const readCreateUserDB = (
  useruid,
  emailUser,
  userPhotoUrl,
  username,
) => {
  readUserDB(useruid).then((res) => {
    console.log('res', res);
    if (res.empty) {
      createUserDB(useruid, emailUser, userPhotoUrl, username);
    } else {
      res.forEach((refDoc) => {
        const user = refDoc.data();
        console.log(user);
      });
    }
  });
};

export const loginWithEmailAndPassword = (txtEmailVal, txtpasswordVal) => {
  loginUser(txtEmailVal, txtpasswordVal)
    .then((res) => {
      console.log('res');
      readUserDB(res.user.uid).then((querySnapshot) => {
        querySnapshot.forEach((refDoc) => {
          const user = refDoc.data();
          console.log(user);
          // Open home template
          window.location.hash = '#/home';

          // console.log('entro', localStorage.getItem('userPhoto'));
        });
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (
        errorCode === 'auth/invalid-email' ||
        errorCode === 'auth/user-not-found' ||
        errorCode === 'auth/wrong-password'
      ) {
        throw errorMessage;
      }
    });
};

export const loginGoogle = () => {
  singInGoogle()
    .then((res) => {
      console.log('entro aqui');
      window.location.hash = '#/home';
      readCreateUserDB(
        res.user.uid,
        res.user.email,
        res.user.photoURL,
        res.user.displayName,
      );
    })
    .catch((error) => {
      if (error) throw error;
    });
};

/*
export const onAuthUser = firebase.auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('usuario conectado');
  } else {
    console.log('usuario no existe');
  }
});
*/
