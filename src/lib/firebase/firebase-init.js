const firebaseConfig = {
  apiKey: 'AIzaSyC7hn9h5GDqloEMz19oUJmD4xsur40Ygf4',
  authDomain: 'leaders-are-readers.firebaseapp.com',
  databaseURL: 'https://leaders-are-readers.firebaseio.com',
  projectId: 'leaders-are-readers',
  storageBucket: 'leaders-are-readers.appspot.com',
  messagingSenderId: '1010200109042',
  appId: '1:1010200109042:web:f70cd13f1057467c66556b'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
