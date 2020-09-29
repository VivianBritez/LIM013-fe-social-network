import { singInFacebook, loginUser } from '../firebase/auth.js';
import {loginGoogle} from '../controller/login-controller.js';

export default () => {
  const viewLogin = document.createElement('main');
  viewLogin.innerHTML = `
    <figure class="bulb-container">
    <img src="img/light-bulb.png" class="light-bulb" alt="icono">
    </figure>
    <figure class="bulb-mobile">
    <img src="img/light-bulb-mobile.png" class="light-bulb-mobile" alt="icono">
    </figure>
    <section class="login-style">
      <h1>Energía Verde</h1>
      <h3>¡Bienvenid@, Energía Verde!</h3>
      <form id="login-form" class="login-form">
        <input type="text" id="txt-email" class="input" placeholder="Nombre de usuario o Email">
        <p id="alert-txt-email"></p>
        <input type="password" id="txt-password" class="input" placeholder="Contraseña">
        <p id="alert-txt-password"></p>
        <button type="submit" class="btn-login" id="btn-login" >Iniciar Sesión</button>
      </form>
      <p>O bien ingresa con..</p>
    <section class="btn-google-facebook">
      <button id="btn-google" class="btn-image"><img src="./img/icon-google.png"></button>
      <button id ="btn-facebook"class="btn-image"><img src="./img/icon-facebook.png"></button>
    </section>
    <p>¿No tienes una cuenta?<a href="#/signup" id = "btn-register" class="btn-register">Regístrate</a></p>
    </section>
    `;

  // Start grabbing our DOM Element
  const txtEmail = viewLogin.querySelector('#txt-email');
  const txtpassword = viewLogin.querySelector('#txt-password');
  const loginForm = viewLogin.querySelector('#login-form');

  // Event submit to user login
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const txtEmailVal = txtEmail.value;
    const txtpasswordVal = txtpassword.value;

    loginUser(txtEmailVal, txtpasswordVal)
      .then(() => {
        // Open home template
        window.location.hash = '#/home';
        // Clear the form
        loginForm.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/invalid-email' || errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
          throw errorMessage;
        }
      });
  });

  // Sign in with google
  viewLogin.querySelector('#btn-google').addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('hola entre aqui');
    loginGoogle();
  });

  // Sign in with facebook
  viewLogin.querySelector('#btn-facebook').addEventListener('click', (event) => {
    event.preventDefault();
    // console.log("Hola ingresaste a Facebook");
    singInFacebook();
  });
  
  return viewLogin;
};
