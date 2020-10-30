import { createAddNoteToDB } from '../firebase-controller/home-controller.js';

// Create storage ref
export const uploadImgPost = (uid, file, username, textPostVal, date, postVal, photoURL) => {
  const storageRef = firebase.storage().ref(`shared_images/${uid}/${file.name}`);
  // Upload file
  const uploadTask = storageRef.put(file);
  uploadTask.on('state_changed', (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(`Upload is ${progress}% done`);
  }, (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      createAddNoteToDB(
        uid,
        username,
        textPostVal,
        date,
        postVal,
        photoURL,
        file.name,
        downloadURL,
      );
    });
  });
};
