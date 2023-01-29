import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCKX5CO4r4NI6YfyGcUzH0lh2ZdYVgA6RI',
  authDomain: 'webapp-notepad-react.firebaseapp.com',
  projectId: 'webapp-notepad-react',
  storageBucket: 'webapp-notepad-react.appspot.com',
  messagingSenderId: '693493752955',
  appId: '1:693493752955:web:40cfb48ac3b379f601aede',
};

const firebaseApp = () => initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp());

export { firebaseApp, firebaseAuth };
