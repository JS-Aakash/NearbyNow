// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Fetch env.json configuration
const response = await fetch('./env.json');
const env = await response.json();

const app = initializeApp(env.FIREBASE_CONFIG);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const envConfig = env; // Export for other uses like Pinata
