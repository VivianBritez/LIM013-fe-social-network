export const createUserDB = (uid, email, photoUrl, nameUser) => firebase.firestore()
  .collection('users').add({
    name: nameUser,
    email: email,
    uid: uid,
    photoUrl: photoUrl,

  });

export const readUserDB = (uid) => firebase.firestore().collection('users')
  .where('uid', '==', uid)
  .get();

export const createNoteDB = (uid, nameUser, privacy, note) => firebase.firestore()
  .collection('notes').add({
    nameUser: nameUser,
    uid: uid,
    privacy: privacy,
    note: note,

  });

export const getNotesDB = () => firebase.firestore().collection('notes')
  .get();

export const addNotesToDB = (name, createNote) => firebase.firestore()
  .collection('addNotes').add({
    creatorName: name,
    note: createNote,
  });

export const readAddNotesToDB = () => firebase.firestore()
  .collection('addNotes')
  .get();
