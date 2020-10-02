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

export const addNotesToDB = (userID, name, createNote) => firebase.firestore()
  .collection('publications').add({
    creatorID: userID,
    creatorName: name,
    note: createNote,
  });

export const readAddNotesToDB = () => firebase.firestore()
  .collection('publications');
