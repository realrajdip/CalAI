import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPeKMpopmNfOQsnbGGd6jOe2EF1V6vo6s",
  authDomain: "calai-22d76.firebaseapp.com",
  projectId: "calai-22d76",
  storageBucket: "calai-22d76.appspot.com",
  messagingSenderId: "131183908449",
  appId: "1:131183908449:web:3d13958d733b9f65317c20",
  measurementId: "G-HBGKSDCD2T",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
