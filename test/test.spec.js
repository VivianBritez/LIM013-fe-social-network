// Import the function
import { createUserAccount, loginUser } from '../src/lib/firebase/data.js';
// Setting up firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
const mocksdk = new firebasemock.MockFirebaseSdk();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // path => (path ? mockdatabase.child(path) : null),
  () => null,
  () => mockauth,
  () => mockfirestore,
  () => mocksdk,
);

// Testing createUserAccount function
describe('createUserAccount', () => {
  it('should be a function', () => {
    expect(typeof createUserAccount).toBe('function');
  });
  it('should be able to create an account', (done) => createUserAccount('sheillyrlp@gmial.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('sheillyrlp@gmial.com');
      done();
    }));
});

// Testing loginUser function
describe('loginUser', () => {
  it('should be a function', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('should be able to login', (done) => loginUser('sheillyrlp@gmial.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('sheillyrlp@gmial.com');
      done();
    }));
});

// importamos la funcion que vamos a testear
// import { mocksdk } from './firebase-mock.js';
// import MockFirebase from 'mock-cloud-firestore';

// mocksdk.auth().flush();

/*
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
*/
