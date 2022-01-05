import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// import "firebase/analytics";
export const firebaseConfig = {
  apiKey: 'AIzaSyCZ4HRRnuRMlzwNFVZi7TnKvUZ7JtoCr-M',
  authDomain: 'lang-9d640.firebaseapp.com',
  projectId: 'lang-9d640',
  storageBucket: 'lang-9d640.appspot.com',
  messagingSenderId: '4145971180',
  appId: '1:4145971180:web:de1a57d823a742c61dcac9'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.firestore();

export default firebase;
