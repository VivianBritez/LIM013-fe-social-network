import { loginGoogle, loginWithEmailAndPassword } from '../firebase-controller/login-controller.js';

export default () => {
  const viewLogin = document.createElement('main');
  viewLogin.innerHTML = `
    <figure class="brand-container">
    <img src="img/reading-main.png" class="reading-character" alt="icono">
    </figure>
    <figure class="logo-mobile">
    <img src="img/Leaders-are-Readers.png" class="reading-logo-mobile" alt="icono">
    </figure>
    <section class="login-style">
      <h1>Leaders are Readers</h1>
      <h3>¡Bienvenid@, reading lover!</h3>
      <form id="login-form" class="login-form">
        <input type="text" id="txt-email" class="input" placeholder="Nombre de usuario o Email">
        <p id="alert-txt-email"></p>
        <input type="password" id="txt-password" class="input" placeholder="Contraseña">
        <p id="alert-txt-password"></p>
        <button type="submit" class="btn-login" id="btn-login" >Iniciar Sesión</button>
      </form>
      <p>O bien ingresa con..</p>
    <section class="btn-google">
      <button id="btn-google" class="btn-image-google"><img src="./img/icon-google.png"></button>
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
    console.log('paso');

    loginWithEmailAndPassword(txtEmailVal, txtpasswordVal);
    // Clear the login form
    loginForm.reset();
  });

  // Sign in with google
  viewLogin.querySelector('#btn-google').addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('hola entre aqui');
    loginGoogle();
  });

  /*
  // Sign in with facebook
  viewLogin.querySelector('#btn-facebook').addEventListener('click', (event) => {
    event.preventDefault();
    // console.log("Hola ingresaste a Facebook");
    loginFacebook();
  });
  */

  return viewLogin;
};
