import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAz_bK3jy36_qMRGUPTdFrOUHRYhYg5Z6E',
  authDomain: 'renokuni.firebaseapp.com',
  projectId: 'renokuni',
  storageBucket: 'renokuni.appspot.com',
  messagingSenderId: '749638601989',
  appId: '1:749638601989:web:9ecd2986e9ecf78ea0bb6c',
  measurementId: 'G-WYNNK2LG04',
};

export const app = initializeApp(firebaseConfig);
