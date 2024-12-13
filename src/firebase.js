// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAL6x5N7OQdIXdM6anCMVEE-cIYVl8jvNQ",
  authDomain: "vutoria-bb1e7.firebaseapp.com",
  projectId: "vutoria-bb1e7",
  storageBucket: "vutoria-bb1e7.firebasestorage.app",
  messagingSenderId: "170057199918",
  appId: "1:170057199918:web:50263a1f180b7bf4dfcabf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
