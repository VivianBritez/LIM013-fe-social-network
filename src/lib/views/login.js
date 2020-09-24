// import { changeTemplate } from '../template-controller/router.js';

import { changeTemplate } from '../view-controller/router.js';
import { singInGoogle, singInFacebook } from '../firebase/data.js';

// export const loginTemplate 
export default () => {
  const viewLogin = document.createElement('main');
  viewLogin.innerHTML = `
    <img src="img/energy.png" class="poxi" alt="icono">
    <section class="login-style">
      <h1>Energía Verde</h1>
      <h3>¡Bienvenid@, Energía Verde!</h3>
      <form id="login-form" class="login-form">
        <input type="text" id="txt-email" class="input" placeholder="Nombre de usuario o Email">
        <p id="alert-txt-email"></p>
        <input type="password" id="txt-password" class="input" placeholder="Contraseña">
        <p id="alert-txt-password"></p>
        <button type="submit" class="btn-main" id="btn-enter" >Iniciar Sesión</button>
      </form>
      <p>O bien ingresa con..</p>
    <section class="btn-google-facebook">
      <button id="btn-google" class="btn-image"><img src="./img/icon-google.png"></button>
      <button id ="btn-facebook"class="btn-image"><img src="./img/icon-facebook.png"></button>
    </section>
    <p>¿No tienes una cuenta?<a href="#/signup" id = "btn-register" class="btn-register">Regístrate</a></p>
    </section>
    `;
  /*
    // Start grabbing our DOM Element
    const txtEmail = viewLogin.querySelector('#txt-email');
    const txtpassword = viewLogin.querySelector('#txt-password');
    const loginForm = viewLogin.querySelector('#login-form');
  */
  // Start ...
  // Sign in with google
  viewLogin.querySelector('#btn-google').addEventListener('click', (event) => {
    event.preventDefault();
    console.log("hola entre aqui");
    singInGoogle()
      .then(() => {
        changeTemplate('#/home');
      })
      .catch(error => console.log(error));
  });
  // Sign in with facebook
  viewLogin.querySelector('#btn-facebook').addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Hola ingresaste a Facebook");
    singInFacebook()
      .then(() => {
        changeTemplate('#/home');
      })
      .catch(error => console.log(error));
  });
  return viewLogin;
};

