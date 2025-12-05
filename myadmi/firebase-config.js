// === PASTE YOUR ACTUAL CONFIG HERE ===
const firebaseConfig = {
  apiKey: "AIzaSyCuMt3PtZBVvowQ-bT0sa6CsWKYKqd5xs8",
  authDomain: "klf-admin.firebaseapp.com",
  projectId: "klf-admin",
  storageBucket: "klf-admin.firebasestorage.app",
  messagingSenderId: "111325814314",
  appId: "1:111325814314:web:a20e2dfee2d58d975eed53"
};

// =====================================

// Don't change anything below
try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ Firebase initialized");
  } else {
    console.error("❌ Firebase SDK not loaded");
  }
} catch (error) {
  console.error("❌ Firebase init error:", error);
}

// Global variables for other scripts to use
window.auth = firebase.auth();
window.db = firebase.firestore();
