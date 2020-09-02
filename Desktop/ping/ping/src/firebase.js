import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDWAXJgBJz6frLJHvhsTvK91GopEjBYvBw",
    authDomain: "ping-a91cf.firebaseapp.com",
    databaseURL: "https://ping-a91cf.firebaseio.com",
    projectId: "ping-a91cf",
    storageBucket: "ping-a91cf.appspot.com",
    messagingSenderId: "1032624621994",
    appId: "1:1032624621994:web:cc7dc6b9f06818ccd403d3",
    measurementId: "G-PM91JTF79S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;