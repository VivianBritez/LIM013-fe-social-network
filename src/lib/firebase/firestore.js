export const createUserDB = (uid, email, photoUrl, nameUser) => firebase.firestore()
.collection('users').add({
  
  name: nameUser,
  email: email, 
  uid: uid,
  photoUrl:photoUrl

});

export const readUserDB = uid => firebase.firestore().collection('users')
.where('uid', '==', uid)
.get();