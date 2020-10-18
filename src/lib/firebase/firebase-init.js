export const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyA_B2EZp8VlQoUoeDhsCeZikGjAeX9K570",
    authDomain: "energy-sources.firebaseapp.com",
    databaseURL: "https://energy-sources.firebaseio.com",
    projectId: "energy-sources",
    storageBucket: "energy-sources.appspot.com",
    messagingSenderId: "517477040110",
    appId: "1:517477040110:web:cffbaf0adbaaacb81298ff"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};
