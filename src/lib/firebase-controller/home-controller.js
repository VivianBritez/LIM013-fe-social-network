import { logOut } from '../firebase/auth.js';
import { addNotesToDB, editTextPost, readAddNotesToDB, deletePost, readUserDB} from '../firebase/firestore.js';

export const homeLogOut = () => {
  logOut()
    .then(() => {
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPhoto');
      window.location.hash = '#/login';
    });
};

export const createAddNoteToDB = (userID, name, createNote, datePost, userMode, photoUser) => {
  addNotesToDB(userID, name, createNote, datePost, userMode, photoUser)
    .then((docRef) => {
      localStorage.setItem('userName', name);
      localStorage.setItem('userPhoto', photoUser);
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

export const readUser = (uid) => {
  readUserDB(uid)
    .then((querySnapshot) => {
      querySnapshot.forEach((refDoc) => {
        const user = refDoc.data();
        console.log("userconroller",user);
        return user;
       
      });
  });
};
export const editTextPostToDB = (docID, changeNote, newDate) => {
  editTextPost(docID, changeNote, newDate)
    .then(() => {
      console.log('note updated');
    });
};

export const deletePostToDB = (docID) => {
  deletePost(docID)
    .then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error removing document:', error);
    });
};

