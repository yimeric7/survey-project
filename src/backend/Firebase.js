// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3De-vlntlpcZ8v6K0hAlUSX-qqFshQeY",
    authDomain: "survey-application-b2456.firebaseapp.com",
    datanaseURL: "https://survey-application-b2456-default-rtdb.firebaseio.com/",
    projectId: "survey-application-b2456",
    storageBucket: "survey-application-b2456.appspot.com",
    messagingSenderId: "552134839914",
    appId: "1:552134839914:web:3674bb5dcdeb547e430413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }

export const auth = getAuth(app)

export default app