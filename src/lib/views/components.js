import loginTemplate from './login.js';
import signUpTemplate from './signup.js';
import { homeTemplate } from './home.js';
import errorPage from './404.js';
import {profile } from './profile.js'

// Create object

const components = {
  loginTemplateProp: loginTemplate,
  signUpTemplateProp: signUpTemplate,
  homeTemplateProp: homeTemplate,
  profileTemplateProp: profile,
  errorPageProp: errorPage,
};

export { components };
