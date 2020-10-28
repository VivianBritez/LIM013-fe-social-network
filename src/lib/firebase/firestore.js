import { db } from './firebase-init.js';
export const createUserDB = (useruid, emailUser, userPhotoUrl, username) => db
  .collection('users').doc(useruid).set({
    name: username,
    email: emailUser,
    uid: useruid,
    photoUrl: userPhotoUrl,
  });
export const readUserDB = (uid) => db.collection('users')
  .where('uid', '==', uid)
  .get();
export const addNotesToDB = (userID, name, createNote, datePost, userMode, photoUser, imgName, imgURL) => firebase
  .firestore()
  .collection('publications').add({
    creatorID: userID,
    creatorName: name,
    note: createNote,
    date: datePost,
    mode: userMode,
    photo: photoUser,
    likesCount: 0,
    name: imgName,
    link: imgURL,
  });
// callbackfn es un funcion como parametro lo mando
export const readAddNotesToDB = (callbackfn) => db
  .collection('publications').orderBy('date', 'desc').onSnapshot((querySnapShot) => {
    const data = [];
    querySnapShot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    // console.log('data', typeof data);
    callbackfn(data);
  });
// Update post
export const editTextPost = (docID, changeNote, newDate) => db.collection('publications')
  .doc(docID).update({
    note: changeNote,
    date: newDate,
  });
// Delete post
export const deletePost = (docID) => db.collection('publications')
  .doc(docID).delete();
//-----------------------------------------------------------------------------------------------
// Like function
export const likeToPost = (docID, userID) => {
  const pubRef = db
    .collection('publications')
    .doc(docID);

  pubRef.collection('likes')
    .doc(userID)
    .set({
      uid: userID,
    });

  pubRef.get().then((doc) => {
    console.log(doc.data().likesCount);
    const prevLikesCount = doc.data().likesCount;
    return pubRef
      .update({
        likesCount: prevLikesCount + 1,
      });
  });
};

// Unlike function
export const unlikeToPost = (docID, userID) => {
  const pubRef = db
    .collection('publications')
    .doc(docID);

  pubRef.get().then((doc) => {
    console.log(doc.data().likesCount);
    const prevLikesCount = doc.data().likesCount;
    return pubRef
      .update({
        likesCount: prevLikesCount - 1,
      });
  });

  pubRef.collection('likes')
    .doc(userID)
    .delete();
};

// Count likes and dislikes
export const count = (docID, userID) => {
  let publicationsRef = db.collection('publications').doc(docID);
  publicationsRef.get().then(() => {
    let counterRef = publicationsRef.collection('likes').where('uid', '==', userID);

    counterRef.get().then((likes) => {
      if (likes.docs.length === 0) {
        likeToPost(docID, userID);
      } else {
        // quitar like del user
        unlikeToPost(docID, userID);
      }
    });
  });

  // return db.runTransaction((transaction) => {
  //   return transaction.get(publicationsRef).then((res) => {
  //     if (!res.exists) {
  //       throw 'Document does not exist!';
  //     }
  //     transaction.set(counterRef, { uid: userID });
  //     unlikeToPost(docID, userID).then((doc) => {
  //       console.log(doc);
  //       if (!doc.exists) {
  //         let newNumLikes = res.data().likesCount + 1;
  //         transaction.update(publicationsRef, {
  //           likesCount: newNumLikes,
  //         });
  //       }
  //     });
  //   });
  // });
};
//----------------------------------------------------------------------------------------------
// Add comments to "comments" collection in each post
export const addCommentToPost = (docID, userID, name, userComment, dateComment, photoUser) => db
  .collection('publications').doc(docID).collection('comments')
  .add({
    creatorID: userID,
    from: name,
    comment: userComment,
    date: dateComment,
    photo: photoUser,
  });
// Get comments of "comments" collection in database
export const getCommentToDB = (docID, callbackfn) => db
  .collection('publications').doc(docID).collection('comments')
  .orderBy('date', 'desc')
  .onSnapshot((querySnapShot) => {
    const commentData = [];
    querySnapShot.forEach((doc) => {
      commentData.push({ postID: docID, id: doc.id, ...doc.data() });
    });
    callbackfn(commentData);
  });