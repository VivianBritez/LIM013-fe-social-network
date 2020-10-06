import {
  homeLogOut, createAddNoteToDB, editTextPostToDB, deletePostToDB,
} from '../firebase-controller/home-controller.js';

const postTemplate = (doc) => {
  const div = document.createElement('div');
  div.classList = 'share-post';
  div.innerHTML = `
  <h4 id="name-user">Publicado por${doc.data().creatorName}</h4>
  <div id="text-post" class="show"><p>${doc.data().note}</p></div>
  <div id="edit-option" class="hide">
  <textarea id="edit-text-post" maxlength="100" rows="8" cols="77">${doc.data().note}</textarea>
  <button type="button" id="accept">Aceptar</button>
  </div>
  <label><i id="i" class="far fa-heart"></i></label>
  <label><i id="i" class="far fa-comment"></i></label>
  <div id="show-options" class="show-options hide">
  <label class="ellipsis"><i id="i" class="fas fa-ellipsis-h">
  </i>
  <select id="options">
  <option value="" disabled selected>Elegir</option>
  <option id="edit" value="edit">Editar</option>
  <option id="delete" value="delete">Borrar</option>
  </select>
  </label>
  </div>
`;

  // Start grabbing our DOM Element
  const options = div.querySelector('#options');
  const showOptions = div.querySelector('#show-options');
  const textPost = div.querySelector('#text-post');
  const editOption = div.querySelector('#edit-option');
  const accept = div.querySelector('#accept');
  // Edit and delete post
  if (localStorage.getItem('userID') === doc.data().creatorID) {
    showOptions.classList.remove('hide');
    showOptions.classList.add('show');
    options.addEventListener('change', (e) => {
      const selectedOption = e.target.value;
      // console.log(selectedOption);
      if (selectedOption === 'edit') {
        console.log('Aquí puede editar');
        console.log(doc.id);
        // console.log(doc.data().creatorID);
        textPost.classList.add('hide');
        textPost.classList.remove('show');
        editOption.classList.add('show');
        editOption.classList.remove('hide');

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
  return div;
};

export const profileTemplate = (posts) => {
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
    <label class"plane"><i id="btn-share" class="far fa-paper-plane"></i></label>
  </div>
  <div id="message-post" class="box-post"> 
  </div>
  `;

  // Start grabbing our DOM Element
  const textPost = viewProfile.querySelector('#text-post');
  const btnShare = viewProfile.querySelector('#btn-share');
  const modePost = viewProfile.querySelector('#mode-post');

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

  posts.forEach((post) => {
    const messagePost = viewProfile.querySelector('#message-post');
    messagePost.appendChild(postTemplate(post));
  });

  const btnlogOut = viewProfile.querySelector('#btn-log-out');
  btnlogOut.addEventListener('click', () => {
    homeLogOut();
  });
  return viewProfile;
};
