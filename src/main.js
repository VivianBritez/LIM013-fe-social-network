//  Import firebase initialize
import { changeTemplate } from './lib/view-controller/router.js';
// Webpage load and reload function
const init = () => {
  changeTemplate(window.location.hash);
  window.addEventListener('hashchange', () => changeTemplate(window.location.hash));
};
window.addEventListener('load', init);
