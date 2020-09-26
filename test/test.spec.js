// importamos la funcion que vamos a testear
import { mocksdk } from './firebase-mock.js';
// import MockFirebase from 'mock-cloud-firestore';
import { emailAndPasswordAuth, loginEmailAndPassword, singInGoogle } from '../src/lib/firebase/data.js';

emailAndPasswordAuth.create({
  email: 'sheillyrlp@gmial.com',
  password: '12345678',
});

mocksdk.auth().flush();

describe('Users create their account', () => {
  it('Should be able to create an account', (done) => {
    return emailAndPasswordAuth('sheillyrlp@gmial.com', '12345678')
      .then(() => {
        mocksdk.auth.getUserByEmail('sheillyrlp@gmial.com')
          .then((user) => {
            console('sheilly user was created');
            expect(emailAndPasswordAuth.email).toBe(user);
            done();
          });
      });
  });
});


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
