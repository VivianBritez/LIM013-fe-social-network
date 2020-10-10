export const createUserDB = (useruid, emailUser, userPhotoUrl, username) => firebase.firestore()
  .collection('users').add({
    name: username,
    email: emailUser,
    uid: useruid,
    photoUrl: userPhotoUrl,

  });

export const readUserDB = (uid) => firebase.firestore().collection('users')
  .where('uid', '==', uid)
  .get();

export const addNotesToDB = (userID, name, createNote, datePost, userMode, photoUser) => firebase
  .firestore()
  .collection('publications').add({
    creatorID: userID,
    creatorName: name,
    note: createNote,
    date: datePost,
    mode: userMode,
    photo: photoUser,
  });

// callbackfn es un funcion como parametro lo mando
export const readAddNotesToDB = (callbackfn) => firebase.firestore()
  .collection('publications').orderBy('date', 'desc').onSnapshot((querySnapShot) => {
    const data = [];
    querySnapShot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    // console.log('data', data);
    callbackfn(data);
  });

// Update post
export const editTextPost = (docID, changeNote, newDate) => firebase.firestore().collection('publications')
  .doc(docID).update({
    note: changeNote,
    date: newDate,
  });

// Delete post
export const deletePost = (docID) => firebase.firestore().collection('publications')
  .doc(docID).delete();
//-----------------------------------------------------------------------------------------------

// Comment

export const addCommentToPost = (userID, name, docID, userComment, dateComment, photoUser) => firebase
  .firestore()
  .collection('publications').doc(docID).collection('comments')
  .add({
    creatorID: userID,
    from: name,
    comment: userComment,
    date: dateComment,
    photo: photoUser,
  });
