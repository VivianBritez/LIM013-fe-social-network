import loginTemplate from './login.js';
import signUpTemplate from './signup.js';
import { profileTemplate } from './home.js';
import errorPage from './404.js';
import { profile } from './profile.js';

// Create object

const components = {
  loginTemplateProp: loginTemplate,
  signUpTemplateProp: signUpTemplate,
  profileTemplateProp: profileTemplate,
  profilePro: profile,
  errorPageProp: errorPage,
  
};

export { components };
