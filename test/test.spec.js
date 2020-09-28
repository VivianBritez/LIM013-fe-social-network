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
