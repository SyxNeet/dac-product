
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from 'firebase/analytics'
import { getStorage } from '@firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBOfnLf0o2p256YsFwn2bBlXKzAkX7I1xU",
  authDomain: "dac-okhub.firebaseapp.com",
  projectId: "dac-okhub",
  storageBucket: "dac-okhub.appspot.com",
  messagingSenderId: "314936690389",
  appId: "1:314936690389:web:b59eb2821ef52fa742845c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getStorage(app)
