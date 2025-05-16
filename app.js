// Paste your Firebase Config here!
const firebaseConfig = {
  apiKey: "AIzaSyBJdQx3oRPIA2Klhf7EX7Och3cWQ1t5__Y",
  authDomain: "inkcorporated-956ce.firebaseapp.com",
  databaseURL: "https://inkcorporated-956ce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "inkcorporated-956ce",
  storageBucket: "inkcorporated-956ce.firebasestorage.app",
  messagingSenderId: "883369780723",
  appId: "1:883369780723:web:e00bfab79853f56fa7de86"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Tab Switching
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        link.classList.add('active');
        document.getElementById(link.dataset.tab).classList.add('active');
    });
});
