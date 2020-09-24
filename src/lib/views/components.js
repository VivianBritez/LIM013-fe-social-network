import loginTemplate from './login.js';
import signUpTemplate from './signup.js';
import { profileTemplate } from './home.js';
import errorPage from './404.js';

// Create object

const components = {
  loginTemplateProp: loginTemplate,
  signUpTemplateProp: signUpTemplate,
  profileTemplateProp: profileTemplate,
  errorPageProp: errorPage,
};

export { components };
