import { getUser } from '../firebase/auth.js';

export const profileTemplate = () => {
  // console.log('user', user);npm
  const user = getUser();
  const viewProfile = document.createElement('section');
  viewProfile.innerHTML = ` 
    <header>
    <nav>
    <input type="checkbox" id="check-and-uncheck">
    <label for="check">
    <i class="fas fa-bars" id="hamburger"></i>
    <i class="fas fa-times" id="cross"></i>
    </label>
      <ul>
        <li>
            <a href="#/login">Salir</a>
        </li>
      </ul>
    </nav>
    </header>
    <section class="container-profile">
      <h2>Perfil</h2>
      <img class="user-image" src="${user.photoURL}">
      <p>${user.displayName}</p>
      <h3>Email</h3>
      <p>${user.email}</p>
      </section>
    </section>
    <div>
    <div id="post-container" class="post">
  <div id="post">
    <textarea
      id="text-post"
      placeholder="¿Qué quieres compartir?"
      maxlength="100"
    ></textarea>
    <select id="mode-post">
      <option value="" disabled selected>Modo</option>
      <option id="private" value="private">Privado</option>
      <option id="public" value="public">Publico</option>
    </select>
  </div>
  <input type="file" id="picture" />
  <label><i id="icon-picture"></i></label>
  <button type="button" id="btn-share">Compartir</button>
</div>
<div id="share-post">
  <p id="name-user">Publicado por</p>
  <textarea id="text-share" maxlength="100"></textarea>
  <label><i id="icon-like"></i></label>
  <label><i id="icon-comment"></i></label>
  <label><i id="icon-ellipsis-h"></i></label>
  <select id="options">
    <option value="" disabled selected>Elegir</option>
    <option id="edit" value="edit">Editar</option>
    <option id="delete" value="delete">Borrar</option>
  </select>
</div>
  `;

  return viewProfile;
};
