import { getUser } from '../firebase/data.js';

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
  `;

  return viewProfile;
};
