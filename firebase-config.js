// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"; // ✅ use full version

const firebaseConfig = {
    apiKey: "AIzaSyCzch-53vyEw_wTkopkBfmnYT-xQL4mG-A",
    authDomain: "nearbynow-in.firebaseapp.com",
    databaseURL: "https://nearbynow-in-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nearbynow-in",
    storageBucket: "nearbynow-in.firebasestorage.app",
    messagingSenderId: "43936475211",
    appId: "1:43936475211:web:14642efc4b732dca3645ce"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
