import { createUser } from '../firebase-controller/signup-controller.js';

export default () => {
  const viewSignUp = document.createElement('section');
  viewSignUp.innerHTML = `
    <h1>Regístrate</h1>
    <form id="signup-form">
      <input type="text" id="signup-name" class="signup-form" placeholder="Nombre" >
      <input type="text" id="signup-last-name" class="signup-form" placeholder="Apellidos" >
      <input type="email" id="signup-email" class="signup-form" placeholder="Email" required>
      <input type="text" id="signup-user-name" class="signup-form" placeholder="Nombre de usuario">
      <input type="password" id="signup-password" class="signup-form" placeholder="Contraseña">
      <input type="password" id="signupbtn-go-back-confirm-password" class="signup-form" placeholder="Confirmar contraseña" required>
      <button type="submit" id="signup-submit" class="submit-form">Enviar</button>
      <button type="button" class="back-arrow" id="btn-go-back"><img src="./img/back-arrow.png"></button>
    </form>
    `;

  // Start grabbing our DOM Element
  const signUpEmail = viewSignUp.querySelector('#signup-email');
  const signupConfirmPassword = viewSignUp.querySelector('#signup-confirm-password');
  const signUpForm = viewSignUp.querySelector('#signup-form');
  const btnGoBack = viewSignUp.querySelector('#btn-go-back');
  const userName = viewSignUp.querySelector('#signup-user-name');

  // Event submit to create a user account
  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const signUpEmailVal = signUpEmail.value;
    const signupConfirmPasswordVal = signupConfirmPassword.value;
    const userNameVal = userName.value;

    createUser(signUpEmailVal, signupConfirmPasswordVal, userNameVal);

    // Clear the form
    signUpForm.reset();
  });

  btnGoBack.addEventListener('click', () => {
    logOut()
      .then(() => {
        window.location.hash = '#/login';
      })
      .catch((error) => {
        if (error) throw error;
      });
  });
  return viewSignUp;
};
