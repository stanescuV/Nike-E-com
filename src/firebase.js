import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// FIREBASE configuration 
const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN ,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET ,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID ,
  appId:process.env.REACT_APP_APPID ,
  measurementId: process.env.REACT_APP_MEASURMENTID
};

//starting the app
const app = firebase.initializeApp(firebaseConfig)

//authentication instance
export const auth = app.auth();

export default app;