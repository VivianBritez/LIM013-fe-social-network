import { loginTemplate } from './login.js'
import { signUpTemplate } from './signup'
import { profileTemplate } from './home'
import { errorPage } from './404.js'

// Create object

const components = {
  loginTemplateProp: loginTemplate,
  signUpTemplateProp: signUpTemplate,
  profileTemplateProp: profileTemplate,
  errorPageProp: errorPage
}

export {components}