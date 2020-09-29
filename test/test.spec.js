import * as myModule from '../src/lib/firebase/auth.js';

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
  it('should be a function', () => expect(typeof myModule.loginUser).toBe('function'));
  it('should be able to login', (done) => {
    myModule.loginUser('sheillyrlp@gmial.com', '12345678')
      .then((user) => {
        expect(user.email).toBe('sheillyrlp@gmial.com');
        done();
      });
  });
});

// sign in with google
describe('login with Google', () => {
  it('Should be a function', () => {
    expect(typeof myModule.singInGoogle).toBe('function');
  });
  it('Should be able to login with Google', (done) => {
    myModule.singInGoogle()
      .then((user) => {
        expect(user.providerData[0].providerId).toBe('google.com');
        done();
      });
  });
});

// Sign in with Facebook
describe('Should be a function ', () => {
  it('function signin', () => expect(typeof myModule.singInFacebook).toBe('function'));
});
describe('logInFacebook', () => {
  it('login with Facebook', () => myModule.singInFacebook().then((user) => {
    expect(myModule.getUser).not.toBe(null);
    expect(user.isAnonymous).toBe(false);
    expect(user.providerData).toEqual([{ providerId: 'facebook.com' }]);
  }));
});

// getUser
describe('getUser', () => {
  it('You should be able to see if a user is logged in or not', () => {
    const callback = (result) => {
      expect(result).toBe(true);
    };
    myModule.getUser(callback);
  });
});

// Logout
describe('logout', () => {
  it('Shoul be able to log out', () => myModule.logOut().then((user) => {
    expect(user).toBe(undefined);
  }));
});
