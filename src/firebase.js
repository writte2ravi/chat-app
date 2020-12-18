import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCnOXQa-v6pxwvXS0FyiG_SGMW_naLBd9k",
    authDomain: "whatsapp-challenge.firebaseapp.com",
    databaseURL: "https://whatsapp-challenge.firebaseio.com",
    projectId: "whatsapp-challenge",
    storageBucket: "whatsapp-challenge.appspot.com",
    messagingSenderId: "608799726418",
    appId: "1:608799726418:web:57de49faeb842ecd4c388b",
    measurementId: "G-6RH8Y2VKGV"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
 