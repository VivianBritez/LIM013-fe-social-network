import { homeLogOut, createAddNoteToDB } from '../firebase-controller/home-controller.js';
import { readAddNotesToDB } from '../firebase/firestore.js';

export const profileTemplate = () => {
  // console.log('user', user);
  const viewProfile = document.createElement('section');
  viewProfile.innerHTML = ` 
    <header>
    <nav>
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
      <img class="user-image" src="${localStorage.getItem('userPhoto')}">
      <p>${localStorage.getItem('userName')}</p>
      <h3>Email</h3>
      <p>${localStorage.getItem('userEmail')}</p>
      </section>
    </section>
    <div id="post-container" class="post general-position">
    <div id="box-post" class="box-post">
      <textarea id="text-post" placeholder="¿Qué quieres compartir?" maxlength="100" rows="8" cols="77">
        </textarea>
    </div>
    <label><i id="i" class="far fa-images"></i>
      <input class="file" type="file"></label>
    <select class="space" id="mode-post">
      <option value="" disabled selected>Modo</option>
      <option id="private" value="private">Privado</option>
      <option id="public" value="public">Publico</option>
    </select>
    <label><i id="btn-share" class="far fa-paper-plane"></i></label>
  </div>
  <div id="share-post" class="general-position">
    <h4 id="name-user">Publicado por</h4>
    <div id="message-post"> </div>
    <div id="message-post" class="box-post"></div>
    <label><i id="i" class="far fa-heart"></i></label>
    <label><i id="i" class="far fa-comment"></i></label>
    <label class="ellipsis"><i id="i" class="fas fa-ellipsis-h"></i></label>
    <select id="options">
      <option value="" disabled selected>Elegir</option>
      <option id="edit" value="edit">Editar</option>
      <option id="delete" value="delete">Borrar</option>
    </select>
  </div>
  `;

  const btnlogOut = viewProfile.querySelector('#btn-log-out');
  btnlogOut.addEventListener('click', () => {
    homeLogOut();
  });

  // Start grabbing our DOM Element
  const textPost = viewProfile.querySelector('#text-post');
  const btnShare = viewProfile.querySelector('#btn-share');

  // Share post
  btnShare.addEventListener('click', () => {
    const textPostVal = textPost.value;

    createAddNoteToDB(localStorage.getItem('userID'), localStorage.getItem('userName'), textPostVal);

    // Clear text content

    // Show post
    const messagePost = viewProfile.querySelector('#message-post');
    readAddNotesToDB()
      .onSnapshot((querySnapshot) => {
        messagePost.innerHTML = '';
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data().note);
          messagePost.innerHTML += `<p>${doc.data().note}</p>`;
        });
      });
  });

  return viewProfile;
};
