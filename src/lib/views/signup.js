import { emailAndPasswordAuth } from '../firebase/data.js';

export default () => {
  const viewSignUp = document.createElement('section');
  viewSignUp.innerHTML = `
    <h1>Regístrate</h1>
    <form id="signup-form">
      <input type="text" id="signup-name" class="signup-form" placeholder="Nombre" >
      <input type="text" id="signup-last-name" class="signup-form" placeholder="Apellidos" >
      <input type="email" id="signup-email" class="signup-form" placeholder="Email" required>
      <input type="text" id="signup-user-name" class="signup-form" placeholder="Nombre de usuario" >
      <input type="password" id="signup-password" class="signup-form" placeholder="Contraseña" required>
      <input type="password" id="signup-confirm-password" class="signup-form" placeholder="Confirmar contraseña">
      <button type="submit" id="signup-submit" class="submit-form">Enviar</button>
    </form>
    `;

  // Start grabbing our DOM Element
  const signUpEmail = viewSignUp.querySelector('#signup-email');
  const signupConfirmPassword = viewSignUp.querySelector('#signup-confirm-password');
  const signUpForm = viewSignUp.querySelector('#signup-form');

  // Event submit to register email and password with Firebase
  signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const signUpEmailVal = signUpEmail.value;
    const signupConfirmPasswordVal = signupConfirmPassword.value;

    emailAndPasswordAuth(signUpEmailVal, signupConfirmPasswordVal);

    // Clear the form
    signUpForm.reset();

    // Open view profile
    window.location.hash = '#/home';
  });
  return viewSignUp;
};
