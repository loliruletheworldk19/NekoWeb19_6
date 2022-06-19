
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoRM3XqzXjSUwGkzcnApnqqZZpdq62pJk",
    authDomain: "nekosocial-d145a.firebaseapp.com",
    projectId: "nekosocial-d145a",
    storageBucket: "nekosocial-d145a.appspot.com",
    messagingSenderId: "248984533311",
    appId: "1:248984533311:web:e65b03f66f682509023b8a"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();


//Event Register account
signUp.addEventListener('click',(e) => {

    var email = document.getElementById('new-email').value;
    var password = document.getElementById('new-password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const db = getDatabase();
        set(ref(db, 'usersList/' + user.uid),{
            uid: user.uid,
            email: email,
            password: password,
            listRoomChat: ''
        });
        alert('user created!');
        setTimeout(function(){
           window.location.href = './loginPage.html';
        },1555)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage} .Error code: ${errorCode}`)
        // ..
    });
})



