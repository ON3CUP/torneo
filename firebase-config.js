import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Tus claves extraídas directamente de la pantalla:
const firebaseConfig = {
  apiKey: "AIzaSyDCfgs2LUY_-SNtK_qddeSzg-0qgj-m_gc",
  authDomain: "torneo-bbdb7.firebaseapp.com",
  projectId: "torneo-bbdb7",
  storageBucket: "torneo-bbdb7.firebasestorage.app",
  messagingSenderId: "1090611538583",
  appId: "1:1090611538583:web:c3cf5813cc3a29fcd7df62"
};

// Inicializar servicios
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);