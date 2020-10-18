export const createUserDB = (useruid, emailUser, userPhotoUrl, username) => firebase.firestore()
  .collection('users').doc(useruid).set({
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
    // console.log('data', typeof data);
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

// Add comments to "comments" collection in each post
export const addCommentToPost = (docID, userID, name, userComment, dateComment, photoUser) => firebase
  .firestore()
  .collection('publications').doc(docID).collection('comments')
  .add({
    creatorID: userID,
    from: name,
    comment: userComment,
    date: dateComment,
    photo: photoUser,
  });

// Get comments of "comments" collection in database
export const getCommentToDB = (docID, callbackfn) => firebase.firestore()
  .collection('publications').doc(docID).collection('comments')
  .orderBy('date', 'desc')
  .onSnapshot((querySnapShot) => {
    const commentData = [];
    querySnapShot.forEach((doc) => {
      commentData.push({ postID: docID, id: doc.id, ...doc.data() });
    });
    callbackfn(commentData);
  });
