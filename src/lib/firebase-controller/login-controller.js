import { readUserDB, createUserDB } from '../firebase/firestore.js';
import { singInGoogle, singInFacebook, loginUser } from '../firebase/auth.js';

const readCreateUserDB = (uid, email, photoUrl, nameUser) => {
  readUserDB(uid)
    .then((res) => {
      console.log('res', res);
      if (res.empty) {
        createUserDB(uid, email, photoUrl, nameUser);
        localStorage.setItem('userName', nameUser);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPhoto', photoUrl);
      } else {
        res.forEach((refDoc) => {
          const user = refDoc.data();
          // console.log(user);
          localStorage.setItem('userName', user.name);
          localStorage.setItem('userEmail', user.email);
          localStorage.setItem('userPhoto', user.photoUrl);
        });
      }
    });
};

export const loginWithEmailAndPassword = (txtEmailVal, txtpasswordVal) => {
  loginUser(txtEmailVal, txtpasswordVal)
    .then((res) => {
      console.log('res');
      readUserDB(res.user.uid)
        .then((querySnapshot) => {
          querySnapshot.forEach((refDoc) => {
            const user = refDoc.data();
            // Open home template
            window.location.hash = '#/home';

            localStorage.setItem('userName', user.name);
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userPhoto', user.photoUrl);

            console.log('entro', localStorage.getItem('userPhoto'));
          });
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
        throw errorMessage;
      }
    });
};

export const loginGoogle = () => {
  singInGoogle()
    .then((res) => {
      localStorage.setItem('userName', res.user.displayName);
      localStorage.setItem('userEmail', res.user.email);
      localStorage.setItem('userPhoto', res.user.photoURL);

      console.log('entro aqui');
      window.location.hash = '#/home';
      readCreateUserDB(res.user.uid, res.user.email, res.user.photoURL, res.user.displayName);
    })
    .catch((error) => {
      if (error) throw error;
    });
};

export const loginFacebook = () => {
  singInFacebook()
    .then((res) => {
      window.location.hash = '#/home';
      readCreateUserDB(res.user.uid, res.user.email, res.user.photoURL, res.user.displayName);
    })
    .catch((error) => {
      if (error) throw error;
    });
};
