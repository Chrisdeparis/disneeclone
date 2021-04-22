import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSng3yzfJ_CJG84yvhlo_-G_dhdzHpnFo",
    authDomain: "disneeclone.firebaseapp.com",
    projectId: "disneeclone",
    storageBucket: "disneeclone.appspot.com",
    messagingSenderId: "681172023188",
    appId: "1:681172023188:web:69d1d02112ce9ed986c181",
    measurementId: "G-H3XH96CT8E"
  };
  // Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;