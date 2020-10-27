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

// Initializes a distributed counter
export const likesCounter = (docID, numShards) => {
  let ref = db
    .collection('publications').doc(docID).collection('counters')
    .doc();
  let batch = db.batch();

  // Initialize the counter document
  batch.set(ref, { numberShards: numShards });

  // Initialize each shard with count=0
  for (let i = 0; i < numShards; i += 1) {
    let shardRef = ref.collection('shards').doc(i.toString());
    batch.set(shardRef, { count: 0 });
  }

  // Commit the write batch
  return batch.commit();
};

// Increment counter
export const incrementCounter = (docID, numShards) => {
  let ref = db
    .collection('publications').doc(docID).collection('counters')
    .doc();
  // Select a shard of the counter at random
  const shardId = Math.floor(Math.random() * numShards).toString();
  const shardRef = ref.collection('shards').doc(shardId);

  // Update count
  return shardRef.update('count', firebase.firestore.FieldValue.increment(1));
};

// To get the total count
export const getCount = (docID) => {
  let ref = db
    .collection('publications').doc(docID).collection('counters')
    .doc();
  // Sum the count of each shard in the subcollection
  return ref.collection('shards').get().then((snapshot) => {
    let totalCount = 0;
    snapshot.forEach((doc) => {
      totalCount += doc.data().count;
    });
    return totalCount;
  });
};
//-----------------------------------------------------------------------------------------------
// Like function

export const likeToPost = (docID, userID) => firebase
  .firestore().collection('publications').doc(docID).collection('likes')
  .doc(userID)
  .set({
    uid: userID,
  });

// Unlike function
export const unlikeToPost = (docID, userID) => db.collection('publications')
  .doc(docID).collection('likes')
  .where('uid', '==', userID)
  .get();

export const count = (docID, userID) => {
  let publicationsRef = db.collection('publications').doc(docID);
  let counterRef = publicationsRef.collection('likes').doc(userID);

  return db.runTransaction((transaction) => {
    return transaction.get(publicationsRef).then((res) => {
      if (!res.exists) {
        throw 'Document does not exist!';
      }
      transaction.set(counterRef, { uid: userID });
      unlikeToPost(docID, userID).then((doc) => {
        console.log(doc);
        if (!doc.exists) {
          let newNumLikes = res.data().likesCount + 1;

          transaction.update(publicationsRef, {
            likesCount: newNumLikes,
          });
        }
      });
    });
  });
};

export const getLikeToPost = (postID) => firebase
  .firestore().collection('likes').doc().collection('like')
  .doc()
  .where('postId', '==', postID)
  .get();

//----------------------------------------------------------------------------------------------
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
