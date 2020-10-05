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

export const addNotesToDB = (userID, name, createNote,date) => firebase.firestore()
  .collection('publications').add({
    creatorID: userID,
    creatorName: name,
    note: createNote,
    date: date,
  });

// callbackfn es un funcion como parametro lo mando 
export const readAddNotesToDB = callbackfn => firebase.firestore()
  .collection('publications').orderBy("date","desc").onSnapshot((data) => {
    console.log(data);
    callbackfn(data);
  });
