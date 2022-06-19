
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase, set, ref, update, onValue, push, child} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
//import { userLoginNow} from "./home.js";
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
    const db = getDatabase();

    // const dataUserList = {};
    // const listRoomUserJoin = {};
    // var userEmail,
    //         userName;
    // const starCountRef = ref(db, 'usersList/' + userLoginNow);
    // onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val();
    //     dataUserList = data;
    //     listRoomUserJoin = data.listRoom;
    //     userEmail = data.email;
    //     userName = data.userName;
    // });



