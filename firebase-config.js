// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js"; // ✅ use full version

const firebaseConfig = {
    apiKey: "AIzaSyAusCQM4vEgjV3OGpyZTN7iBlEf3AxbaOY",
    authDomain: "nearbynow07.firebaseapp.com",
    projectId: "nearbynow07",
    storageBucket: "nearbynow07.firebasestorage.app",
    messagingSenderId: "384534035331",
    appId: "1:384534035331:web:df33109271d972c16e94b6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
