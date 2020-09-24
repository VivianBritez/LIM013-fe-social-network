// importamos la funcion que vamos a testear
// import { mockauth } from '../test/firebase-mock.js'
import { loginEmailAndPassword, singInGoogle } from '../src/lib/firebase/data.js';

describe('Login de Usuarios', () => {
  it('loginEmailAndPassword deberia ser una funcion', () => {
    expect(typeof loginEmailAndPassword).toBe('function');
  });
  it('Deberia iniciar sesion', () => {
    loginEmailAndPassword('anaguanda@gmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('anaguanda@gmail.com');
      });
  });
});


describe('Login de Usuarios con Google', () => {
  it('deberia ser una funcion', () => {
    expect(typeof singInGoogle).toBe('function');
  });
  it('Deberia poder iniciar sesion con Google', (done) => {
    singInGoogle()
      .then((user) => {
        expect(user.providerData[0].providerId).toBe('google.com');
        done();
      });
  });
});
