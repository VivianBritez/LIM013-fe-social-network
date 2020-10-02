import { createUserDB } from '../firebase/firestore.js';
import { createUserAccount } from '../firebase/auth.js';

const imgProfileUserDefault = '../img/userProfile.png';

export const createUser = (email, password, name) => {
  createUserAccount(email, password)
    .then((res) => {
      // Open home template
      window.location.hash = '#/home';
      // Save user data in firebase
      createUserDB(res.user.uid, email, imgProfileUserDefault, name);

      localStorage.setItem('userID', res.user.uid);
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPhoto', imgProfileUserDefault);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email' || errorCode === 'auth/weak-password') {
        throw errorMessage;
      }
    });
};