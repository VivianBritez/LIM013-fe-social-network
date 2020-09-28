import {
  logOut,
  lp,
  singInGoogle,
  singInFacebook,
  getUser,
  eP,
} from '../src/lib/firebase/data.js';

// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
  () => mockfirestore,
);

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

describe('getUser', () => {
  it('Debería poder observar si un usuario está logueado o no', () => {
    const callback = (result) => {
      expect(result).toBe(true);
    };
    getUser(callback);
  });
});
