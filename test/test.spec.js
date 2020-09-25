import {
  logOut,
  lp,
  singInGoogle,
  singInFacebook,
  getUser,
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

describe('Cerrar sesión', () => {
  it('debería ser una función', () => {
    expect(typeof logOut).toBe('function');
  });
  it('Deberia poder cerrar sesion', (done) => {
    logOut()
      .then((user) => {
        expect(user).toBe(undefined);
        done();
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

describe('Login de Usuarios con Facebook', () => {
  it('deberia ser una funcion', () => {
    expect(typeof singInFacebook).toBe('function');
  });
  it('Deberia poder iniciar sesion con Facebook', (done) => {
    singInFacebook()
      .then((user) => {
        expect(user.providerData[0].providerId).toBe('facebook.com');
        done();
      });
  });
});

describe('lp', () => {
  it('Debería poder iniciar sesion', () => lp('gatitosbonitos@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('gatitosbonitos@gmail.com');
    }));
});

describe('getUser', () => {
  it('Debería poder observar si un usuario está logueado o no', () => {
    const callback = (result) => {
      expect(result).toBe(true);
    };
    getUser(callback);
  });
});
