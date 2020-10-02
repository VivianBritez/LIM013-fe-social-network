import { homeCreateNote, homeLogOut, createAddNoteToDB, readNoteToDB } from '../firebase-controller/home-controller.js';
import { getUser } from '../firebase/auth.js';

export const profileTemplate = () => {
  // console.log('user', user);
  // const user = getUser();
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
    <div id="respon">
    <div id="post-container" class="post">
  <div id="post">
    <div id="postboxpos"><textarea id="text-post" placeholder="¿Qué quieres compartir?"
    maxlength="100" rows="8" cols="77" ></textarea></div>

  </div>
  <div>
  <label><i id="i" class="far fa-images"></i>
  <input class="file" type="file"></label>
<select class="space" id="mode-post">
  <option value="" disabled selected>Modo</option>
  <option id="private" value="private">Privado</option>
  <option id="public" value="public">Publico</option>
</select>
  <label><i id="btn-post" class="far fa-paper-plane"></i></label>
  </div>
</div>
<div id="share-post">
  <h4 id="name-user">Publicado por</h4>
  <textarea id="postboxpos" maxlength="100" rows="5" cols="77" ></textarea>
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

  const btnPost = viewProfile.querySelector('#btn-post');
  btnPost.addEventListener('click', () => {
    homeCreateNote(uid, username, privacy, note);
  });

  // Start grabbing our DOM Element
  const textPost = viewProfile.querySelector('#text-post');
  // const textShareVal = viewProfile.querySelector('#textshare').value;
  const btnShare = viewProfile.querySelector('#btn-share');

  const user = getUser();

  // Share post
  btnShare.addEventListener('click', () => {
    const textPostVal = textPost.value;

    createAddNoteToDB(user.uid, user.displayName, textPostVal);
    // Show post
    readNoteToDB();
    // Clear text content
    // textPostVal = '';
  });

  return viewProfile;
};
