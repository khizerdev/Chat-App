import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMO5n9LqaiLp29WDA2wIRjhCfimYynx6Y",
    authDomain: "w-app-e4f46.firebaseapp.com",
    projectId: "w-app-e4f46",
    storageBucket: "w-app-e4f46.appspot.com",
    messagingSenderId: "769677645795",
    appId: "1:769677645795:web:d37291f9b6212ed6d732d6",
    measurementId: "G-S587PFEXW3"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebaseApp.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth , provider}

  export default db;