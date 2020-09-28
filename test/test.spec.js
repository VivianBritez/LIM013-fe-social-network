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

// Testing createUserAccount function
describe('createUserAccount', () => {
  it('should be a function', () => {
    expect(typeof myModule.createUserAccount).toBe('function');
  });
  it('should be able to create an account', (done) => {
    myModule.createUserAccount('sheillyrlp@gmial.com', '12345678')
      .then((user) => {
        expect(user.email).toBe('sheillyrlp@gmial.com');
        done();
      });
  });
});

// Testing loginUser function
describe('loginUser', () => {
  it('should be a function', () => {
    expect(typeof myModule.loginUser).toBe('function');
  });
  it('should be able to login', (done) => myModule.loginUser('sheillyrlp@gmial.com', '12345678')
    .then((user) => {
      expect(user.email).toBe('sheillyrlp@gmial.com');
      done();
    }));
});

// Sing in with Facebook
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

// Logout
describe('logout', () => {
  it('Shoul be able to log out', () => myModule.logOut().then((user) => {
    expect(user).toBe(undefined);
  }));
});
