// configurando firebase mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
const mocksdk = new firebasemock.MockFirebaseSdk();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore,
  () => mocksdk,
);
