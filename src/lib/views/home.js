import { homeCreateNote, homeLogOut } from '../firebase-controller/home-controller.js';
//import { getUser } from '../firebase/auth.js';

export const profileTemplate = () => {
  // console.log('user', user);
  //const user = getUser();
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
  <label><i id="image" class="far fa-images"></i>
  <input class="file" type="file"></label>
<select class="space" id="privacy-post">
  <option value="0" disabled selected>Modo</option>
  <option value="private">Privado</option>
  <option value="public">Publico</option>
</select>
  <label><i id="btn-post" class="far fa-paper-plane"></i></label>
  </div>
</div>
<div id="share-post">
  <h4 id="name-user">Publicado por</h4>
  <textarea id="postboxpos" maxlength="100" rows="5" cols="77" ></textarea>
  <label><i id="likes" class="far fa-heart"></i></label>
  <label><i id="coment" class="far fa-comment"></i></label>
  <label class="ellipsis"><i id="i" class="fas fa-ellipsis-h"></i></label>
  <select id="options">
    <option value="" disabled selected>Elegir</option>
    <option id="edit" value="edit">Editar</option>
    <option id="delete" value="delete">Borrar</option>
  </select>
</div>
  `;
  
  const privacy = viewProfile.querySelector('#privacy-post').value;
  const noteVal = viewProfile.querySelector('#text-post');

  const note = noteVal.value;


  const btnlogOut = viewProfile.querySelector('#btn-log-out');
  btnlogOut.addEventListener( 'click', () =>{
    homeLogOut();
  });

  const btnPost = viewProfile.querySelector('#btn-post');
  btnPost.addEventListener( 'click', () => {
    console.log(note, "sd",privacy);
    //homeCreateNote( localStorage.getItem('userUid'),localStorage.getItem('userName'),privacy,note);
  });


  return viewProfile;
};
