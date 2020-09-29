import { singInGoogle, readUserDB, createUserDB } from '../firebase/firestore.js';

const readCreateUserDB = (uid, email, photoUrl, nameUser) => {
    readUserDB(uid)
      .then((res) => {
        if (res.empty) {
          createUserDB(uid, email, photoUrl, nameUser);
          
        } else {
          res.forEach((refDoc) => {
            const user = refDoc.data();
            
          });
        }
      });
  };

export const loginGoogle = () => {
    singInGoogle()
      .then((res) => {
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