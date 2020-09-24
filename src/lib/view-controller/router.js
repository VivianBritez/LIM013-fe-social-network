import { components } from '../views/components.js';
import { userSesionActive } from '../firebase/data.js';
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
    { return userSesionActive(container.appendChild(components.profileTemplateProp())); }
    default:
      return container.appendChild(components.errorPageProp());
  }
};

export { changeTemplate };
