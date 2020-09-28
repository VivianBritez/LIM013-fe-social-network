import * as myModule from '../src/lib/firebase/data.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  //  use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

//  create user

describe('should be able to create a user', () => {
  it('should be able to create a user ', (done) => {
    myModule
      .emailAndPasswordAuth('vivianbritez@gmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('vivianbritez@gmail.com');
        done();
      });
  });
});

//  Sign in with email

describe('Shoul be a function', () => {
  it('function', () => {
    expect(typeof myModule.signInWithEmailAndPassword).toBe('function');
  });
});
describe('login email and password', () => {
  it('Should be able to log in with email and password', (done) => {
    myModule
      .signInWithEmailAndPassword('vivianbritez@gmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('vivianbritez@gmail.com');
        done();
      });
  });
});

//  sing in with Google

describe('logInGoogle', () => {
  it('Login with Google', () => myModule.singInGoogle().then((user) => {
    expect(user.isAnonymous).toBe(false);
    expect(user.providerData).toEqual([{ providerId: 'google.com' }]);
  }));
});

//  sing in with Facebook
describe('Shoul be a function ', () => {
  it('function sigin', () => {
    expect(typeof myModule.singInFacebook).toBe('function');
  });
});
describe('logInFacebook', () => {
  it('login with Facebook', () => myModule.singInFacebook().then((user) => {
    expect(myModule.getUser).not.toBe(null);
    expect(user.isAnonymous).toBe(false);
    expect(user.providerData).toEqual([{ providerId: 'facebook.com' }]);
  }));
});

//  logout

describe('logout', () => {
  it('Shoul be able to log out', () => myModule.logOut().then((user) => {
    expect(user).toBe(undefined);
  }));
});
