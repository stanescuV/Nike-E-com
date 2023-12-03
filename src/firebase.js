import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// FIREBASE configuration 
const firebaseConfig = {
    apiKey:process.env.REACT_APP_APIKEY,
    authDomain:process.env.REACT_APP_AUTHDOMAIN ,
    projectId:process.env. REACT_APP_PROJECTID,
    storageBucket:process.env.REACT_APP_STORAGEBUCKET ,
    messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID ,
    appId:process.env.REACT_APP_APPID ,
    measurementId: process.env.REACT_APP_MEASURMENTID
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