import { readAddNotesToDB, getCommentToDB } from '../firebase/firestore.js';
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
    { return readAddNotesToDB((data) => {
      console.log(data.length);
      console.log(data[0].id);
      // container.innerHTML = '';
      for (let i = 0; i < data.length; i += 1) {
        const dataID = data[i].id;
        console.log(dataID);
        getCommentToDB(dataID, ((comments) => {
          container.innerHTML = '';
          container.appendChild(components.profileTemplateProp(data, comments));
        }));
      }
    });
    }
    default:
      return container.appendChild(components.errorPageProp());
  }
};

export { changeTemplate };
