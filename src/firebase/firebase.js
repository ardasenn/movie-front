import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDVdlc5LkCQGBTfjkd3t6VUPAEpCT0mK-Q",
  authDomain: "arda-deneme-4955c.firebaseapp.com",
  databaseURL:
    "https://arda-deneme-4955c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "arda-deneme-4955c",
  storageBucket: "arda-deneme-4955c.appspot.com",
  messagingSenderId: "265408184861",
  appId: "1:265408184861:web:a853a17345495c1a92fcf4",
  measurementId: "G-N951FEHWFF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
