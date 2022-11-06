import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import React from "react";
import { createRoot } from "react-dom/client";

const firebaseConfig = {
    apiKey: "AIzaSyCn-S9PYSTGDYHRwBHy5scvYPnv893Xy2M",
    authDomain: "fir-01-42c9e.firebaseapp.com",
    projectId: "fir-01-42c9e",
    storageBucket: "fir-01-42c9e.appspot.com",
    messagingSenderId: "971578372636",
    appId: "1:971578372636:web:78468386e58d895c66a5d9",
    measurementId: "G-07M1KN0NV3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return <h1>Hello World from demo-01 app!</h1>;
}

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(<App />);
