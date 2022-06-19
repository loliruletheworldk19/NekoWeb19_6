import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCoRM3XqzXjSUwGkzcnApnqqZZpdq62pJk",
    authDomain: "nekosocial-d145a.firebaseapp.com",
    projectId: "nekosocial-d145a",
    storageBucket: "nekosocial-d145a.appspot.com",
    messagingSenderId: "248984533311",
    appId: "1:248984533311:web:e65b03f66f682509023b8a"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
function loginOut() {
    logoutBTN.addEventListener('click',(e) => {
        signOut(auth).then(() => {
            window.location.href = './index.html';
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('error: ' + errorMessage);
        });
    });
};
export default loginOut;
