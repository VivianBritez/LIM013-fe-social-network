import { logOut } from '../lib/firebase/data.js';
import { changeTemplate } from "../view-controller/router.js";

export default (user) => {
  // console.log('user', user);
  const viewProfile = document.createElement('section');
  viewProfile.innerHTML = ` 
    <form action="">
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
    changeTemplate ('#/home');
    })
    .catch((error) => {
      if (error) throw error;
    });
  });
  return viewProfile;
};
