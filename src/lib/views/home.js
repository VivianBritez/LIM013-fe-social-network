// import { logOut } from '../lib/firebase/data.js';
// export const profileTemplate = 
export default () => {
  const viewProfile = document.createElement('section')
  viewProfile.innerHTML=`
    Hola
  `;
  
  return viewProfile;
}

/*
export const profileTemplate = (user) => {
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
  
  // Event 
  
  document.getElementById('btn-logout').addEventListener('click', () => {
    logOut();
    //viewSignin();
    window.location.hash = '#/Signin';
  });
  
  return viewProfile;
};
*/