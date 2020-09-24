// export const signUpTemplate = 
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
  /*
    // Start grabbing our DOM Element
    const signUpEmail = viewSignUp.getElemntById('signup-email');
    const signUpPassword = viewSignUp.getElemntById('signup-password');
    const signUpForm = viewSignUp.getElemntById('signup-form');
  */
  // Start ...
  return viewSignUp;
};

