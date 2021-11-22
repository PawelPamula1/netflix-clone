import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBLwz6iVsLl4gAJ--a7xe6fyUooVMZcqaQ',
  authDomain: 'netflix-clone-e955f.firebaseapp.com',
  projectId: 'netflix-clone-e955f',
  storageBucket: 'netflix-clone-e955f.appspot.com',
  messagingSenderId: '418278330403',
  appId: '1:418278330403:web:9ea6148569bea0faf02196',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
