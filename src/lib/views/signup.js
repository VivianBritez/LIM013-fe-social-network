export const signUpTemplate = () => {
  const viewSignUp = document.createElement('section');
  viewSignUp.innerHTML = `
    <h1>Regístrate</h1>
    <form id="signup-form">
      <input type="text" id="signup-name" placeholder="Nombre" >
      <input type="text" id="signup-last-name" placeholder="Apellidos" >
      <input type="email" id="signup-email" placeholder="Email" required>
      <input type="text" id="signup-user-name" placeholder="Nombre de usuario" >
      <input type="password" id="signup-password" placeholder="Contraseña" required>
      <input type="password" id="signup-confirm-password" placeholder="Confirmar contraseña">
      <button type="submit" id="signup-submit">Enviar</button>
    </form>
    `;

    // Start grabbing our DOM Element
    const signUpEmail = viewSignUp.getElemntById('signup-email');
    const signUpPassword = viewSignUp.getElemntById('signup-password');
    const signUpForm = viewSignUp.getElemntById('signup-form');

    // Start ...




    return viewSignUp;
};