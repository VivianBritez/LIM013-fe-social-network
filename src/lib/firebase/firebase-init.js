export const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAJsgq2BP-6H8TRouriGWLAVyYnwEIGUQU',
    authDomain: 'continual-air-289918.firebaseapp.com',
    databaseURL: 'https://continual-air-289918.firebaseio.com',
    projectId: 'continual-air-289918',
    storageBucket: 'continual-air-289918.appspot.com',
    messagingSenderId: '352014947754',
    appId: '1:352014947754:web:cf433cb5a4869a9e36c7d3',
    measurementId: 'G-R2NB3F2FJM',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};