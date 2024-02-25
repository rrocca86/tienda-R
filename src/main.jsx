import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm9uLCjLyaSiAHcSTTAhqJ9OTCQsntykw",
  authDomain: "tienda-r-ec116.firebaseapp.com",
  projectId: "tienda-r-ec116",
  storageBucket: "tienda-r-ec116.appspot.com",
  messagingSenderId: "87063058736",
  appId: "1:87063058736:web:d6db548425741ab25c90f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
