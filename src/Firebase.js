import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCDygtgCWPFJat1Of4gfavSicvcEOXdyOk",
    authDomain: "react-auth-f7097.firebaseapp.com",
    databaseURL: "https://react-auth-f7097-default-rtdb.firebaseio.com",
    projectId: "react-auth-f7097",
    storageBucket: "react-auth-f7097.appspot.com",
    messagingSenderId: "296106594844",
    appId: "1:296106594844:web:5863655d4942a4296185d9",
    measurementId: "G-ZCKZ1X32KF"
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export { auth };


 
 