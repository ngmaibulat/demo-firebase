import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
// const auth =
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const email = "ngmaibulat@gmail.com";
const password = "qaz123ZX";

// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//         console.log(user.email);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });

signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (!credential) {
            throw new Error("sign in problem!");
        }

        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("Auth Happened");
    } else {
        console.log("Sign out");
    }
});

console.log(auth);

function App() {
    console.log(app);
    return (
        <div>
            <h1>Hello World from Samsun!!!</h1>

            <section id="signedIn">
                <button>Sign Out</button>
            </section>

            <section id="signedOut">
                <button>Sign In</button>
            </section>
        </div>
    );
}

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(<App />);
