  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  import { getDatabase, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
  // import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
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
  
  
  //Event Login account
login.addEventListener('click',(e) => {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const dt = new Date();
        const db = getDatabase();
            update(ref(db, 'usersList/' + user.uid),{
                lastLogin: dt,
                password: password
            });
            // alert(`Welcome back ${email}!`);
            window.location.href = './home.html';
            // ...

            const starCountRef = ref(db, 'users/' + user.uid);
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                //updateStarCount(postElement, data);
                console.log(`data: ${data}`);
                getUserName = data.username;
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`error: ${errorMessage} error code: ${errorCode}`);
        });
});
