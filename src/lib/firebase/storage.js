export const uploadImgPost = (file, uid) => {
  const reFstorage = firebase.storage().ref(`imgPost/${uid}/${file.name}`);
  reFstorage.put(file);
};
