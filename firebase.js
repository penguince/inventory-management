import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCCJ11XlhGlm-FQ8rg51uYZIJsUv07ZaJI",
  authDomain: "inventory-management-14b08.firebaseapp.com",
  projectId: "inventory-management-14b08",
  storageBucket: "inventory-management-14b08.appspot.com",
  messagingSenderId: "815053839009",
  appId: "1:815053839009:web:03fa0e96e8d47b03b8aee0",
  measurementId: "G-67W13921SX"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
