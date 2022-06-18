import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, ref, child, get, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
// database reference
// var loginDB = firebase.database().ref("login");
// Import the functions you need from the SDKs you need
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdJBzeDdbDQyAfiT2EHnV-pr6Dtol4JLo",
    authDomain: "oblivion-a044a.firebaseapp.com",
    databaseURL: "https://oblivion-a044a-default-rtdb.firebaseio.com",
    projectId: "oblivion-a044a",
    storageBucket: "oblivion-a044a.appspot.com",
    messagingSenderId: "14412337294",
    appId: "1:14412337294:web:57afd4f5dc197913dbf9df",
    measurementId: "G-HZR5JJ5FDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//retrieve data
const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    // console.log('processing.....')
    const dbRef = ref(getDatabase());
    // console.log(dbRef)
    get(child(dbRef, "login")).then((snapshot) => {
        if (snapshot.exists()) {
            // console.log(snapshot.val())
            // console.log(generateHash(document.getElementById('pwd').value))
            let unn = document.querySelector('#usname').value
            // console.log(snapshot.val())
            console.log(snapshot.val()[`${unn}`].pwd)
            if (snapshot.val()[`${unn}`].pwd == generateHash(document.getElementById('pwd').value)) {
                // session_generator()
                writeUserData()
                window.location.replace("http://www.google.com");
            }
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
})
// function redirect_page(db) {

// }

// hash generator function
function generateHash(plainText) {
    var md = forge.md.sha256.create();
    md.start();
    md.update(plainText, "utf8");
    var hashText = md.digest().toHex();
    // document.getElementById("hashText").innerHTML = hashText;
    return hashText;
}
// {/* <button >Calculate Hash</button> */}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

// create session id
var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

// to store session id
// function session_generator() {
//     const session_ID = ID()
//     sessionStorage.setItem("token", session_ID);
// }


// session database
function writeUserData() {
    const session_ID = ID()
    // console.log(session_ID)
    const db = getDatabase();
    // const session_ID = ID()
    var user_name = document.getElementById('usname').value
    console.log(user_name)
    sessionStorage.setItem("token", generateHash(session_ID));
    update(ref(db, 'login/' + user_name ), {
        session_id: session_ID,
        // sahil: "sahil"
    });
}

// writeUserData()