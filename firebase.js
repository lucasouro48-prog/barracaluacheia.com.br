import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAp1q1jgJtl8fdBn_lFtxFGXZDLvVRga18",
  authDomain: "restaurante-luacheia-d4834.firebaseapp.com",
  projectId: "restaurante-luacheia-d4834",
  storageBucket: "restaurante-luacheia-d4834.appspot.com",
  messagingSenderId: "330437690928",
  appId: "1:330437690928:web:efe14a2609e06c3e324ff5"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
