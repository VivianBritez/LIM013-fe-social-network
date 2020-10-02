import { logOut } from '../firebase/auth.js';
import { addNotesToDB, readAddNotesToDB } from '../firebase/firestore.js';

export const homeLogOut = () => {
  logOut()
    .then(() => {
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPhoto');
      window.location.hash = '#/login';
    });
};

export const createAddNoteToDB = (userID, name, createNote) => {
  addNotesToDB(userID, name, createNote)
    .then((docRef) => {
      localStorage.setItem('userName', name);
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const readNoteToDB = () => {
  readAddNotesToDB()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().note);
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};
