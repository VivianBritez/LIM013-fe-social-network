import { logOut } from '../firebase/auth.js';
import {
  addNotesToDB,
  editTextPost,
  deletePost,
  readUserDB,
  addCommentToPost,
} from '../firebase/firestore.js';

export const homeLogOut = () => {
  logOut().then(() => {
    window.location.hash = '#/login';
  });
};

export const createAddNoteToDB = (
  userID,
  name,
  createNote,
  datePost,
  userMode,
  photoUser,
  imgName,
  imgURL,
) => {
  addNotesToDB(
    userID,
    name,
    createNote,
    datePost,
    userMode,
    photoUser,
    imgName,
    imgURL,
  )
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
export const readUser = (uid) => {
  readUserDB(uid).then((querySnapshot) => {
    querySnapshot.forEach((refDoc) => {
      const user = refDoc.data();
      console.log('userconroller', user);
      return user;
    });
  });
};
export const editTextPostToDB = (docID, changeNote, newDate) => {
  editTextPost(docID, changeNote, newDate).then(() => {
    console.log('note updated');
  });
};

export const deletePostToDB = (docID) => {
  deletePost(docID)
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document:', error);
    });
};

export const addCommentToDB = (
  docID,
  userID,
  name,
  userComment,
  dateComment,
  photoUser,
) => {
  addCommentToPost(docID,
    userID,
    name,
    userComment,
    dateComment,
    photoUser)
    .then(() => {
      console.log('Comment successfully!');
    })
    .catch((error) => {
      console.error('Error send comment:', error);
    });
};
