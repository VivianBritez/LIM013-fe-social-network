import {
  homeLogOut,
  createAddNoteToDB,
  editTextPostToDB,
  deletePostToDB,
  addCommentToDB,
} from '../firebase-controller/home-controller.js';
import { getCommentToDB, count } from '../firebase/firestore.js';
import { uploadImgPost } from '../firebase/storage.js';
import { getUser } from '../firebase/auth.js';

const commentTemplate = (comData) => {
  const commentList = document.createElement('div');
  commentList.innerHTML = `
  <div id="comment-container">
  <span><img class='user-image-comment' src='${comData.photo}'></span>
  <div class="name-comment">
  <h5 class='username-comment'>${comData.from}</h5>
  <p class="comment-text">${comData.comment}</p>
  </div>
  </div>
  `;
  return commentList;
};

const postTemplate = (doc) => {
  const user = getUser();
  const div = document.createElement('div');
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
  <div id='text-post' class='show'><p class="post-text">${doc.note}</p></div>
  <div id="img-div" class="hidden"><img src="${doc.link}"class='image-div'></div>
  <div id='edit-option' class='hidden'>
  <textarea class='textarea' id='edit-text-post'>${doc.note}</textarea>
  <button type='button' id='accept'><i class='fas fa-check'></i></button>
  </div>
  <div id="icons-container">
  <div id="heart-comment-icons">
  <label id='like-count'><i id='like' class='far fa-heart'></i>${doc.likesCount}</label>
  <label><i id='comment-icon' class='far fa-comment'></i></label>
  </div>
  <div id="close-icon" class='hidden'>
  <label><img src="img/close-window.png" id="close-comments"></label>
  </div>
  </div>
  <div id='comment-box' class='hidden'>
  <span><img class='user-image-comment' src='${user.photoURL}'></span>
  <textarea id='comment-post' class='comment-post' placeholder='Añade un comentario...'></textarea>
  <button type='button' id='btn-send-comment' class='btn-send-comment'><img src='./img/icons8-paper-plane-30.png'></button>
  </div>
  <div id='comment-show' class="hidden">
  </div>
`;
  // Start grabbing our DOM Element
  const options = div.querySelector('#options');
  const showOptions = div.querySelector('#show-options');
  const textPost = div.querySelector('#text-post');
  const editOption = div.querySelector('#edit-option');
  const accept = div.querySelector('#accept');
  const imgDiv = div.querySelector('#img-div');

  if (doc.link !== '' && doc.link !== undefined) {
    imgDiv.classList.remove('hidden');
    imgDiv.classList.add('show');
  }

  // Edit and delete post
  if (user.uid === doc.creatorID) {
    showOptions.classList.remove('hidden');
    showOptions.classList.add('show');
    options.addEventListener('change', (e) => {
      const selectedOption = e.target.value;
      if (selectedOption === 'edit') {
        textPost.classList.add('hidden');
        textPost.classList.remove('show');
        editOption.classList.add('show');
        editOption.classList.remove('hidden');
        accept.addEventListener('click', () => {
          const editTextPostVal = div.querySelector('#edit-text-post').value;
          const newDate = new Date();
          editTextPostToDB(doc.id, editTextPostVal, newDate);
        });
      } else if (selectedOption === 'delete') {
        deletePostToDB(doc.id);
      }
    });
  }
  // Add commments in a post
  const commentIcon = div.querySelector('#comment-icon');
  const commentBox = div.querySelector('#comment-box');
  const commentPost = div.querySelector('#comment-post');
  const btnSend = div.querySelector('#btn-send-comment');
  const closeIcon = div.querySelector('#close-icon');
  const commentShow = div.querySelector('#comment-show');
  commentIcon.addEventListener('click', () => {
    commentBox.classList.add('show');
    commentBox.classList.remove('hidden');
    commentShow.classList.add('show');
    commentShow.classList.remove('hidden');
    closeIcon.classList.remove('hidden');
    closeIcon.classList.add('show');
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
      if (commentPostVal !== '') {
        commentPost.value = '';
      }
    });
    closeIcon.addEventListener('click', () => {
      commentShow.classList.remove('show');
      commentShow.classList.add('hidden');
      commentBox.classList.add('hidden');
      commentBox.classList.remove('show');
      closeIcon.classList.remove('show');
      closeIcon.classList.add('hidden');
    });
  });
  // Send each comments to commentTemplate
  getCommentToDB(doc.id, (comments) => {
    commentShow.innerHTML = '';
    comments.forEach((element) => {
      commentShow.appendChild(commentTemplate(element));
    });
  });

  // Likes counter
  const like = div.querySelector('#like');
  like.addEventListener('click', () => {
    count(doc.id, user.uid);
  });
  return div;
};

/* --------------------------------------------home template-----------------------------------*/
export const homeTemplate = (posts) => {
  const user = getUser();
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
      <ul>
      <li>
          <a id='btn-profile'>Profile</a>
      </li>
    </ul>
      
    </nav>
    </header>
    <section class="container-home">
      <img class="user-information" src="${user.photoURL}">
      <p class="user-information">  ${user.displayName}</p>
      </section>
    </section>
    <div id='post-container' class='post general-position'>
    <div>
      <textarea id='box-post' class='textarea' placeholder='¿Qué quieres compartir?'></textarea>
    </div>
    <div id= 'preview-img-post' class='preview-img-post'>
    <div id= "show-img">
    <img id="etiquette-image"></div>
    <p id='cross-mark' style="display: none">❌</p>
    </div>
    
    <div id= 'events-share' class='events-share'>
    <label><img src='./img/gallery.png' id='icon-img' style="display: block" class=''>
    <input class='file' id ='upload-img' type='file'></label>
    <label><i id="btn-share" class="far fa-paper-plane"></i></label>
    </div>
    <select class='space hidden' id='mode-post'>
      <option value='' disabled selected>Modo</option>
      <option id='private' value='private'>Privado</option>
      <option id='public' value='public'>Publico</option>
    </select>
    
  </div>
  <div id='message-post'> 
  </div>
  `;
  // Start grabbing our DOM Element
  const textPost = viewHome.querySelector('#box-post');
  const post = viewHome.querySelector('#mode-post');
  const btnShare = viewHome.querySelector('#btn-share');
  const crossMark = viewHome.querySelector('#cross-mark');

  let files = [];
  // Previsualize image
  const uploadImg = viewHome.querySelector('#upload-img');
  const etiquetteImage = viewHome.querySelector('#etiquette-image');
  etiquetteImage.setAttribute('class', 'img-post');
  uploadImg.addEventListener('change', (event) => {
    uploadImg.classList.remove('show');
    crossMark.removeAttribute('style');
    const reader = new FileReader();
    files = event.target.files;
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => {
      etiquetteImage.src = reader.result;
    };
  });

  crossMark.addEventListener('click', () => {
    etiquetteImage.src = '';
    uploadImg.value = '';
    crossMark.style.display = 'none';
  });
  // Share post
  btnShare.addEventListener('click', () => {
    const textPostVal = textPost.value;
    const postVal = post.value;
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

  const btnProfile = viewHome.querySelector('#btn-profile');
  btnProfile.addEventListener('click', () => {
    window.location.hash = '#/profile';
  });
  const btnlogOut = viewHome.querySelector('#btn-log-out');
  btnlogOut.addEventListener('click', () => {
    homeLogOut();
  });
  return viewHome;
};
