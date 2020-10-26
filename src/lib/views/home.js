import {
  homeLogOut,
  createAddNoteToDB,
  editTextPostToDB,
  deletePostToDB,
  addCommentToDB,
} from '../firebase-controller/home-controller.js';
import {
  getCommentToDB,
  getCount,
  incrementCounter,
  likesCounter,
  likeToPost,
} from '../firebase/firestore.js';
import { uploadImgPost, getImgURL } from '../firebase/storage.js';
import { getUser } from '../firebase/auth.js';
/*
const formatoFecha = (fecha) => {
  const fechaFin = `${fecha.getDate()} - ${fecha.getMonth() + 1} - ${fecha.getFullYear()}  ${fecha.getHours()}:${fecha.getMinutes()}`;
  return fechaFin;
};
*/
const commentTemplate = (comData) => {
  const commentList = document.createElement('div');
  // console.log('doc', doc);
  // commentList.classList = 'comment-share';
  commentList.innerHTML = `
  <span><img class='user-image-comment' src='${comData.photo}'></span>
  <h5 class='username-comment'>${comData.from}</h5>
  <p>${comData.comment}</p>
  `;
  return commentList;
};
/* <div class='container-user-comment>
</div>
*/
const postTemplate = (doc) => {
  const user = getUser();
  // console.log(doc);
  // console.log(doc.id);
  // console.log(commentDoc);
  // const user=readUser(doc.creatorID);
  // console.log('userHome',user);
  const div = document.createElement('div');
  // console.log('doc', doc);
  div.classList = 'share-post';
  div.innerHTML = `
  <div class='container-user'>
  <span><img class='user-image-post' src='${doc.photo}'></span>
  <h4 class='name-user'>${doc.creatorName}</h4>
  <div id='show-options' class='hidden'>
  <label class='ellipsis' id='ellipsis' ><i id='i' class='fas fa-ellipsis-h'></i>
  <select id='options'>
  <option value='' disabled selected>Elegir</option>
  <option id='edit' value='edit'>Editar</option>
  <option id='delete' value='delete'>Borrar</option>
  </select></label></h4>
  </div>
  </div>
  <div id='text-post' class='show'><p>${doc.note}</p></div>
  <div id="img-div" class="hidden"><img src="${doc.link}"></div>
  <div id='edit-option' class='hidden'>
  <textarea class='textarea' id='edit-text-post'>${doc.note}</textarea>
  <button type='button' id='accept'><i class='fas fa-check'></i></button>
  </div>
  <label><i id='like' class='far fa-heart'></i></label>
  <label><i id='comment-icon' class='far fa-comment'></i></label>
  <div id='comment-box' class='hidden'>
  <span><img class='user-image-comment' src='${user.photoURL}'></span>
  <textarea id='comment-post' class='comment-post' placeholder='Añade un comentario...'></textarea>
  <button type='button' id='btn-send-comment' class='btn-send-comment'><img src='./img/icons8-paper-plane-30.png'></button>
  </div>
  <div id='comment-show'>
  </div>
`;

  if (doc.link !== '' && doc.link !== undefined) {
    const imgDiv = div.querySelector('#img-div');
    imgDiv.classList.remove('hidden');
    imgDiv.classList.add('show');
  }

  // Start grabbing our DOM Element
  const options = div.querySelector('#options');
  const showOptions = div.querySelector('#show-options');
  const textPost = div.querySelector('#text-post');
  const editOption = div.querySelector('#edit-option');
  const accept = div.querySelector('#accept');

  // Edit and delete post
  if (user.uid === doc.creatorID) {
    showOptions.classList.remove('hidden');
    showOptions.classList.add('show');
    options.addEventListener('change', (e) => {
      const selectedOption = e.target.value;
      // console.log(selectedOption);
      if (selectedOption === 'edit') {
        console.log('Aquí puede editar');
        console.log(doc.id);
        // console.log(doc.creatorID);
        textPost.classList.add('hidden');
        textPost.classList.remove('show');
        editOption.classList.add('show');
        editOption.classList.remove('hidden');

        accept.addEventListener('click', () => {
          const editTextPostVal = div.querySelector('#edit-text-post').value;
          console.log(editTextPostVal);
          const newDate = new Date();
          editTextPostToDB(doc.id, editTextPostVal, newDate);
        });
      } else if (selectedOption === 'delete') {
        console.log('Data eliminada');
        deletePostToDB(doc.id);
      }
    });
  }

  // Add commments in a post
  const commentIcon = div.querySelector('#comment-icon');
  const commentBox = div.querySelector('#comment-box');
  const commentPost = div.querySelector('#comment-post');
  const btnSend = div.querySelector('#btn-send-comment');

  commentIcon.addEventListener('click', () => {
    console.log('Funciona');
    commentBox.classList.add('show');
    commentBox.classList.remove('hidden');

    btnSend.addEventListener('click', () => {
      const commentPostVal = commentPost.value;
      const dateComment = new Date();
      addCommentToDB(
        doc.id,
        user.uid,
        user.displayName,
        commentPostVal,
        dateComment,
        user.photoURL,
      );
    });
  });

  // Send each comments to commentTemplate
  getCommentToDB(doc.id, (comments) => {
    const commentShow = div.querySelector('#comment-show');
    commentShow.innerHTML = '';
    comments.forEach((element) => {
      // console.log(element);
      commentShow.appendChild(commentTemplate(element));
    });
  });

  // Likes counter
  const like = div.querySelector('#like');

  like.addEventListener('click', () => {
    likeToPost(doc.id, user.uid);
    console.log('Like a post');
  });
  /*
  like.addEventListener('click', () => {
    likesCounter(doc.id, 10).then(() => {
      return incrementCounter(doc.id, 10);
    }).then(() => {
      return getCount(doc.id);
    });
  });
*/
  return div;
};

export const homeTemplate = (posts) => {
  const user = getUser();
  console.log(user);
  const viewHome = document.createElement('section');
  viewHome.innerHTML = ` 
    <header>
    <nav>
    <div class="title-leaders-readers">
    <h4 class="title">Leaders are Readers 📖</h4></div>
    <input type="checkbox" id="check-and-uncheck">
    <label for="check-and-uncheck">
    <i class="fas fa-bars" id="hamburger"></i>
    <i class="fas fa-times" id="cross"></i>

    </label>
      <ul>
        <li>
            <a id="btn-log-out">Salir</a>
        </li>
      </ul>
    </nav>
    </header>
    <section class="container-profile">
      <h2>Perfil</h2>
      <img class="user-image" src="${user.photoURL}">
      <p>${user.displayName}</p>
      <h3 class="text-email">Email</h3>
      <p>${user.email}</p>
      </section>
    </section>
    <div id='post-container' class='post general-position'>
    <div>
      <textarea id='box-post' class='textarea' placeholder='¿Qué quieres compartir?'></textarea>
    </div>
    <div id="show-img">
    <img id="imageSendToStorage"></div>
    <label ><img src='./img/gallery.png' >
      <input class='file' id ='upload-img' type='file'></label>
    <select class='space hidden' id='mode-post'>
      <option value='' disabled selected>Modo</option>
      <option id='private' value='private'>Privado</option>
      <option id='public' value='public'>Publico</option>
    </select>
    <label><i id="btn-share" class="far fa-paper-plane"></i></label>

  </div>
  <div id='message-post'> 
  </div>
  `;

  // Start grabbing our DOM Element
  const textPost = viewHome.querySelector('#box-post');
  const post = viewHome.querySelector('#mode-post');
  const btnShare = viewHome.querySelector('#btn-share');
  // const modePost = viewHome.querySelector('#mode-post');

  /*
  modePost.addEventListener('change', (e) => {
    const selectedMode = e.target.value;
    // Share post
    btnShare.addEventListener('click', () => {
      const textPostVal = textPost.value;
      const date = new Date();
      createAddNoteToDB(localStorage.getItem('userID'), localStorage.getItem('userName'), textPostVal, date, selectedMode);
      // Clear text content
      // listPublication();
    });
  });
  */
  let files = [];
  // Previsualize image
  const uploadImg = viewHome.querySelector('#upload-img');
  const preview = viewHome.querySelector('#show-img');
  const etiquetteImage = viewHome.querySelector('#imageSendToStorage');

  uploadImg.addEventListener('change', (event) => {
    console.log(uploadImg);
    const reader = new FileReader();
    files = event.target.files;
    console.log(files);
    reader.readAsDataURL(event.target.files[0]);
    console.log(reader);
    //
    reader.onload = () => {
      etiquetteImage.src = reader.result;
      console.log(etiquetteImage);
      preview.innerHTML = '';
      preview.append(etiquetteImage);
    };
    console.log(etiquetteImage.src);
  });

  // Share post
  btnShare.addEventListener('click', () => {
    const textPostVal = textPost.value;
    const postVal = post.value;
    // console.log(postVal, 'probando valor');
    const date = new Date();
    if (files[0] !== undefined) {
      uploadImgPost(
        user.uid,
        files[0],
        user.displayName,
        textPostVal,
        date,
        postVal,
        user.photoURL,
      );
    }
    if (textPostVal !== '' && files[0] === undefined) {
      console.log(etiquetteImage.src);
      createAddNoteToDB(
        user.uid,
        user.displayName,
        textPostVal,
        date,
        postVal,
        user.photoURL,
        '',
        '',
      );
    }
  });
  // Send each publication to postTemplate
  posts.forEach((publication) => {
    const messagePost = viewHome.querySelector('#message-post');
    messagePost.appendChild(postTemplate(publication));
  });
  const btnlogOut = viewHome.querySelector('#btn-log-out');
  btnlogOut.addEventListener('click', () => {
    homeLogOut();
  });

  return viewHome;
};
