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
    case '#/': {
      return container.appendChild(components.loginTemplateProp());
    }
    case '#/login': {
      return container.appendChild(components.loginTemplateProp());
    }
    case '#/signup': {
      return container.appendChild(components.signUpTemplateProp());
    }
    case '#/profile': {
      return readAddNotesToDB((data) => {
        container.innerHTML = '';
        container.appendChild(components.profilePro(data));
      });
    }
    case '#/home': {
      return readAddNotesToDB((data) => {
        container.innerHTML = '';
        container.appendChild(components.homeTemplateProp(data));
      });
    }
    default:
      return container.appendChild(components.errorPageProp());
  }
};

export { changeTemplate };
