// admin/firebase-config.js - COMPLETE VERSION
// Get your config from Firebase Console → Project settings → Your apps → Web app

// ⚠️ REPLACE THIS WITH YOUR ACTUAL CONFIG FROM FIREBASE:
const firebaseConfig = {
  apiKey: "AIzaSyCuMt3PtZBVvowQ-bT0sa6CsWKYKqd5xs8",
  authDomain: "klf-admin.firebaseapp.com",
  projectId: "klf-admin",
  storageBucket: "klf-admin.firebasestorage.app",
  messagingSenderId: "111325814314",
  appId: "1:111325814314:web:a20e2dfee2d58d975eed53"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create global variables that other scripts can use
const auth = firebase.auth();
const db = firebase.firestore();
