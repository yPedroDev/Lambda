import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXsiYSnsCJK82K3Qw1p00ngERdB_2xFvk",
  authDomain: "lambda-5409b.firebaseapp.com",
  projectId: "lambda-5409b",
  storageBucket: "lambda-5409b.appspot.com",
  messagingSenderId: "1034935739882",
  appId: "1:1034935739882:web:b5cb0320cdf1984958fe93",
  measurementId: "G-DW0Q1GBB7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}