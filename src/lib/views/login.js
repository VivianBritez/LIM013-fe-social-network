
import { loginGoogle, loginWithEmailAndPassword } from '../firebase-controller/login-controller.js';


export default () => {
  const viewLogin = document.createElement('main');
  viewLogin.innerHTML = `
    <figure class='bulb-container'>
    <img src='img/light-bulb.png' class='light-bulb' alt='icono'>
    </figure>
    <figure class='bulb-mobile'>
    <img src='img/light-bulb-mobile.png' class='light-bulb-mobile' alt='icono'>
    </figure>
    <section class='login-style'>
      <h1>Energy Sources!</h1>
      <h3>¡Bienvenid@, Energía Verde!</h3>
      <form id='login-form' class='login-form'>
        <input type='text' id='txt-email' class='input' placeholder='Nombre de usuario o Email'>
        <p id='alert-txt-email'></p>
        <input type='password' id='txt-password' class='input' placeholder='Contraseña'>
        <p id='alert-txt-password'></p>
        <button type='submit' class='btn-login' id='btn-login' >Iniciar Sesión</button>
      </form>
      <p>O bien ingresa con..</p>
    <section class='btn-google-facebook'>
      <button id='btn-google' class='btn-image'><img src='./img/icon-google.png'></button>
    <p>¿No tienes una cuenta?<a href='#/signup' id = 'btn-register' class='btn-register'>Regístrate</a></p>
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
  viewLogin.querySelector('#btn-google').addEventListener('click', () => {
    // event.preventDefault();
    // console.log('hola entre aqui');
    loginGoogle();
  });

  return viewLogin;
};
