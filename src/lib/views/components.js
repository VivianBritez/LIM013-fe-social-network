import LoginTemplate from './login.js';
import SignUpTemplate from './signup.js';
import ProfileTemplate from './home.js';
import ErrorPage from './404.js';

// Create object

const components = {
  loginTemplateProp: LoginTemplate,
  signUpTemplateProp: SignUpTemplate,
  profileTemplateProp: ProfileTemplate,
  errorPageProp: ErrorPage,
};

export { components };