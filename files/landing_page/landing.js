// navbar js
import { content_table } from "./changes_landing.js"
// import {contactFormDB} from "/main_runner.js"

// firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, ref, child, get, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function check_things() {
    try {
        const send_req_complaint = document.querySelector(
            '#send_req_complaint'
        );
        // console.log(send_req_complaint)  
        if (check_things) {
            send_req_complaint.addEventListener("click", writeOuptassUserData)
            console.log('Yes');
            
        } else {
            console.log('No')
        }
        return send_req_complaint.length > 0;
    } catch (err) { console.log(err) }
}

content_table.addEventListener('click', check_things)



// const write_d= (name, emailid, msgContent) =>{
//     var newContactForm = contactFormDB.push()

//     newContactForm.set({
//         name : name,
//         emailid : emailid,
//         msgContent : msgContent,
//     })
// }

function writeOuptassUserData() {
    const db = getDatabase();
    // var user_name = document.getElementById('usname').value
    var address = document.getElementById('form_address').value
    var mobile_no = document.getElementById('form_mobile_no').value
    var from = document.getElementById('form_from').value
    var to = document.getElementById('form_to').value
    var reason = document.getElementById('form_reason').value


    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // console.log(address)
    // console.log(mobile_no)
    // console.log(from)
    // console.log(to)
    // console.log(reason)
    update(ref(db, 'student/' + "21185" + "/pending/outpass/" + date +"_"+ time), {
        address: address,
        mobile_no: mobile_no,
        from: from,
        to: to,
        reason: reason
    });
    console.log('done')
    document.querySelector('.alert').style.display ='block';
    setTimeout(() =>{
        document.querySelector(".alert").style.display= "none";
        // console.log('timer..')
    },3000);
    document.querySelector("#contact-form").reset();
}