// firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCFLraETw1hOSG44xPNPqoXnRImhegTJAM",
  authDomain: "asoblockchain-6f3de.firebaseapp.com",
  projectId: "asoblockchain-6f3de",
  storageBucket: "asoblockchain-6f3de.appspot.com",
  messagingSenderId: "156804356619",
  appId: "1:156804356619:web:4b00905fc294dfa350c50e",
  measurementId: "G-CYL7N4DG6V"
};

// Verifica que todas las propiedades estén definidas
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId || !firebaseConfig.appId) {
  throw new Error("Faltan parámetros de configuración en Firebase");
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth
export const auth = getAuth(app);

