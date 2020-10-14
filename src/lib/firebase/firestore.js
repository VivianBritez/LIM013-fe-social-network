export const createUserDB = (useruid, emailUser, userPhotoUrl, username) => firebase.firestore()
  .collection('users').add({
    name: username,
    email: emailUser,
    uid: useruid,
    photoUrl: userPhotoUrl,

  });

export const readUserDB = uid => firebase.firestore().collection('users')
  .where('uid', '==', uid)
  .get();


export const getUserInformation = callback => firebase.firestore()
  .collection('users')
  .onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    callback(data);
  });



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
export const readAddNotesToDB = callbackfn => firebase.firestore()
  .collection('publications')
  .orderBy('date', 'desc')
  .onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      const obj = {
        id: doc.id,
        creatorName: doc.data().creatorName,
        note: doc.data().note,
        date: doc.data().date,
        mode: doc.data().mode,
        photo: doc.data().photo,
      };
      data.push(obj); // sacar todas las propiedades...
    });
    console.log('data', data);
    callbackfn(data);
    console.log(callbackfn);
  });

// Update post
export const editTextPost = (docID, changeNote, newDate) => firebase.firestore().collection('publications')
  .doc(docID).update({
    note: changeNote,
    date: newDate,
  });

// Delete post
export const deletePost = docID => firebase.firestore().collection('publications')
  .doc(docID).delete();

// update profile


export const editInfoProfile = (docID, name, direction, about, preferences) => {
  const result = firebase.firestore().collection("users").doc(docID).update({
    displayName: name,
    displayDirection: direction,
    displayAbout: about,
    displayPreferences: preferences,
  });
  return result;
};
