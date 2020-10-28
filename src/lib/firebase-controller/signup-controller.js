import { createUserDB } from '../firebase/firestore.js';
import { createUserAccount, getUser } from '../firebase/auth.js';

const userProfilePicByDefault = '../img/userProfile.png';
export const createUser = (email, password, name) => {
  createUserAccount(email, password)
    .then((res) => {
      console.log(res.user.uid);
      const user = getUser();
      console.log(user);
      user.updateProfile({
        displayName: name,
        photoURL: userProfilePicByDefault,
      });
      // Open home template
      window.location.hash = '#/home';
      // Save user data in firebase
      createUserDB(res.user.uid, email, userProfilePicByDefault, name);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email' || errorCode === 'auth/weak-password') {
        throw errorMessage;
      }
    });
};

