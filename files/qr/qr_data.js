// firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, ref, child, get, update, onValue, set } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDdJBzeDdbDQyAfiT2EHnV-pr6Dtol4JLo",
    authDomain: "oblivion-a044a.firebaseapp.com",
    databaseURL: "https://oblivion-a044a-default-rtdb.firebaseio.com",
    projectId: "oblivion-a044a",
    storageBucket: "oblivion-a044a.appspot.com",
    messagingSenderId: "14412337294",
    appId: "1:14412337294:web:575e2f4b7884acb4dbf9df",
    measurementId: "G-DR0Y31KXQH"
};

var token;
var element = {};

function getParameters() {
    let urlString =
        window.location.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for (let pair of queryString.entries()) {
        console.log("Key is:" + pair[0]);
        console.log("Value is:" + pair[1]);
        var key = pair[0]
        var value = pair[1]
        element[key] = value;
        // element.quantity = pair[1];
    }
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const data = ref(db, "live/" + token);
var today = new Date();
onValue(data, (snapshot) => {
    var from = snapshot.val()['from'].split('-')
    if (today.getFullYear() >= from[0] && today.getMonth() >= from[1] && today.getDay() >= from[2]){
        console.log('done')
    }
            
        })