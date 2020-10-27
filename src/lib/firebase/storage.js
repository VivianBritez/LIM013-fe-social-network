import { createAddNoteToDB } from '../firebase-controller/home-controller.js';

export const uploadImgPost = (file, uid, name, createNote, datePost,userMode, photoUser) => {
  console.log('entre al storage')
  const storageRef = firebase.storage().ref(`imgPost/${uid}/${file.name}`);
  const task= storageRef.put(file);
  task.on('state_changed',
    snapshot=> {
      const porcentaje = snapshot.bytesTransferred / snapshot.totalByte * 100
    },
    err => {
      console.log(err)
    },
    () => {
      task.snapshot.ref.getDownloadURL()
      .then(url => {
        console.log(url)
        createAddNoteToDB(uid, name, createNote, datePost,userMode, photoUser,url)
      }).catch(err => {
        console.log(`error obteniendo url ${err}`, 4000)
      });
    });

};

//state_changed
//obtener url y luego crear el creadnote con los parametros
