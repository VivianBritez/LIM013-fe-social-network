// export const errorPage = 
export default () => {
  const viewPageNotFound = document.createElement('section');
  viewPageNotFound.setAttribute('id','message');
  viewPageNotFound.innerHTML = `
    <h2>404</h2>
    <h1>Página no encontrada</h1>
    <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
    `;

  return viewPageNotFound;
}