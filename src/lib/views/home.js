// import { logOut, getUser } from '../firebase/data.js';

export const profileTemplate = () => {
  // console.log('user', user);
  // const user = getUser();
  const viewProfile = document.createElement('section');
  viewProfile.innerHTML = `
  Hola
  `;
  /*
  viewProfile.innerHTML = `
    <form>
      <h2>Perfil</h2>
      <img class="user-image" src="${user.photoURL}">
      <p>${user.displayName}</p>
      <h3>Email</h3>
      <p>${user.email}</p>
      <button type="button" id="btn-logout">Salir</button>
      </section>
    </form>
  `;

  // Log out

  viewProfile.querySelector('#btn-logout').addEventListener('click', () => {
    logOut()
      .then(() => {
        window.location.hash = '#/login';
      })
      .catch((error) => {
        if (error) throw error;
      });
  });
  */
  return viewProfile;
};
