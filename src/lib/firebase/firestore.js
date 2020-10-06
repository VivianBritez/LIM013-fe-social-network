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

export const addNotesToDB = (userID, name, createNote,date, privacy,  photoUser) => firebase.firestore()
  .collection('publications').add({
    creatorID: userID,
    creatorName: name,
    note: createNote.trim(),
    date: date,
    privacy: privacy,
    photoUser: photoUser,
  });

// callbackfn es un funcion como parametro lo mando 
export const readAddNotesToDB = callbackfn => firebase.firestore()
  .collection('publications').orderBy("date","desc").onSnapshot((data) => {
    console.log("data",data);
    callbackfn(data);
  });

export const deletepost = idpost => firebase.firestore()
  .collection('publications').doc(idpost).delete();

// UPDATE POSTS
export const updatePosts = (idpost, textPost) => firebase.firestore()
.collection('publications').doc(idpost).update({
  note: textPost,
});