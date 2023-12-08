import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// FIREBASE configuration 
const firebaseConfig = {
    apiKey:process.env.local.REACT_APP_APIKEY,
    authDomain:process.env.local.REACT_APP_AUTHDOMAIN ,
    projectId:process.env.local. REACT_APP_PROJECTID,
    storageBucket:process.env.local.REACT_APP_STORAGEBUCKET ,
    messagingSenderId:process.env.local.REACT_APP_MESSAGINGSENDERID ,
    appId:process.env.local.REACT_APP_APPID ,
    measurementId: process.env.local.REACT_APP_MEASURMENTID
};

//starting the app
const app = initializeApp(firebaseConfig);

//starting the authentication

export const auth = getAuth();
createUserWithEmailAndPassword(auth, "victor@gmail.com", "123456")
  .then((userCredential) => {
    console.log(userCredential)
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });