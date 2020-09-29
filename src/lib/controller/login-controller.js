import { singInGoogle, readUserDB, createUserDB } from '../firebase/firestore.js';

const readCreateUserDB = (uid, email, photoUrl, nameUser) => {
    readUserDB(uid)
      .then((localStorage) => {
        if (localStorage.empty) {
          createUserDB(uid, email, photoUrl, nameUser);
          
        } else {
          localStorage.forEach((refDoc) => {
            const user = refDoc.data();
            
          });
        }
      });
  };

export const loginGoogle = () => {
    singInGoogle()
      .then((localStorage) => {
        window.location.hash = '#/home';
        readCreateUserDB(localStorage.user.uid, localStorage.user.email, localStorage.user.photoURL, localStorage.user.displayName);
      })
      .catch((error) => {
        if (error) throw error;
      });
};

export const loginFacebook = () => {
    singInFacebook()
        .then((localStorage) => {
        window.location.hash = '#/home';
        readCreateUserDB(localStorage.user.uid, localStorage.user.email, localStorage.user.photoURL, localStorage.user.displayName);
    })
    .catch((error) => {
      if (error) throw error;
    });
};