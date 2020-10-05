import { readAddNotesToDB } from '../firebase/firestore.js';
import { components } from '../views/components.js';

// Change Template

const changeTemplate = (hash) => {
  // const id = hash.split('/')[1];
  const container = document.getElementById('container');
  container.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/':
    { return container.appendChild(components.loginTemplateProp()); }
    case '#/login':
    { return container.appendChild(components.loginTemplateProp()); }
    case '#/signup':
    { return container.appendChild(components.signUpTemplateProp()); }
    case '#/home':
    { readAddNotesToDB((data) => {
      console.log(data);
      container.innerHTML = '';
      return container.appendChild(components.profileTemplateProp(data));
    });
    }
    default:

      return container.appendChild(components.errorPageProp());
  }
};

export { changeTemplate };
