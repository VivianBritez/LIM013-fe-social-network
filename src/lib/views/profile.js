import { getUser } from '../firebase/auth.js';
import { editTextPost } from '../firebase/firestore.js';

export const profile = () => {
  const user = getUser();
  const editProfile = document.createElement('section');
  editTextPost.classList = 'section-profile';
  editProfile.innerHTML = ` 
      <header>
      <nav>
      <div class='title-leaders-readers'>
      <h4 class='title'>Readers are Leaders 📖</h4></div>
      <input type='checkbox' id='check-and-uncheck'>
      <label for='check-and-uncheck'>
      <i class='fas fa-bars' id='hamburger'></i>
      <i class='fas fa-times' id='cross'></i>
      </label>
        <ul>
        <li>
        <a id='btn-btn-home' href='#/home'>Home</a>
          </li>
        </ul>
      </nav>
      </header>
      <div id="cover-photo" class="cover-photo"></div>
      <div class= "position circulo">
      <span>
      <img src="${user.photoURL}">
      <h4 class="info-user-profile">${user.displayName}</h4>
      <h4 class="info-user-profile">${user.email}</h4>
      <span>
     </div> 
      </section> `;

  return editProfile;
};
