//  Import firebase initialize
import { firebaseInit } from './lib/firebase/firebase-init.js' 
import { changeTemplate } from './lib/template-controller/router.js'

// Webpage load and reload function 

const init = () => {
  firebaseInit();
  changeTemplate(window.location.hash);
  window.addEventListener('hashchange', () => changeTemplate(window.location.hash));

}

window.addEventListener('load', init)