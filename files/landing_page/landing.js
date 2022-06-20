// navbar js
import { content_table, title_innerText } from "./changes_landing.js"
// import {contactFormDB} from "/main_runner.js"

// firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, ref, child, get, update, onValue } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

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

let send_req;
function check_things() {
    try {
        if (title_innerText == "Complaint") {
            console.log('complaint')
            send_req = document.querySelector(
                '#send_req_complaint')
        }
        else if (title_innerText == "Leave Application") {
            console.log("la")
            send_req = document.querySelector(
                '#send_req_la')
        }
        else if (title_innerText == "Outpass") {
            console.log('outpass')
            send_req = document.querySelector(
                '#send_req_outpass');
        }
        // console.log(send_req_complaint)  
        if (check_things) {
            // send_req_complaint.addEventListener("click", writeComplaintUserData)
            if (title_innerText == "Leave Application") {
            send_req.addEventListener("click", writeLAUserData)
            }
            else if (title_innerText == "Complaint") {
            send_req.addEventListener("click", writeComplaintUserData)
            }
            else if (title_innerText == "Complaint") {
            send_req.addEventListener("click", writeOutpassUserData)
            }
            // send_req_la.addEventListener("click", writeLAUserData)
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

function writeOutpassUserData() {
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
    update(ref(db, 'student/' + "21185" + "/outpass/pending/" + date + "_" + time), {
        address: address,
        mobile_no: mobile_no,
        from: from,
        to: to,
        reason: reason
    });
    console.log('done')
    document.querySelector('.alert').style.display = 'block';
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
        // console.log('timer..')
    }, 3000);
    document.querySelector("#contact-form").reset();
}

function writeLAUserData() {
    const db = getDatabase();
    // var user_name = document.getElementById('usname').value
    var address = document.getElementById('form_la_address').value
    var mobile_no = document.getElementById('form_la_mobile').value
    var from = document.getElementById('form_la_from').value
    var to = document.getElementById('form_la_to').value
    var reason = document.getElementById('form_la_reason').value


    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // console.log(address)
    // console.log(mobile_no)
    // console.log(from)
    // console.log(to)
    // console.log(reason)
    update(ref(db, 'student/' + "21185" + "/la/pending/" + date + "_" + time), {
        address: address,
        mobile_no: mobile_no,
        from: from,
        to: to,
        reason: reason
    });
    console.log('done')
    document.querySelector('.alert').style.display = 'block';
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
        // console.log('timer..')
    }, 3000);
    document.querySelector("#contact-form").reset();
}

function writeComplaintUserData() {
    const db = getDatabase();
    // var user_name = document.getElementById('usname').value
    var address = document.getElementById('form_subject_complaint').value
    var mobile_no = document.getElementById('form_mobile_complaint').value
    var from = document.getElementById('form_regard_complaint').value
    var to = document.getElementById('form_to_complaint').value
    var reason = document.getElementById('form_desc_complaint').value


    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // console.log(address)
    // console.log(mobile_no)
    // console.log(from)
    // console.log(to)
    // console.log(reason)
    update(ref(db, 'student/' + "21185" + "/complaint/" + date + "_" + time), {
        address: address,
        mobile_no: mobile_no,
        from: from,
        to: to,
        reason: reason
    });
    console.log('done')
    document.querySelector('.alert').style.display = 'block';
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
        // console.log('timer..')
    }, 3000);
    document.querySelector("#contact-form").reset();
}

// for outpass
var data_table_outpass;
var adder_table_outpass;
let data_content_outpass = [];
let a_outpass;
let b_outpass;
let type = ['pending', 'approve', 'decline']
// let output_data_outpass;
// function to fetch data for display from firebase
// const sahil = 0;
function get_data_outpass(location) {
    const dbRef = ref(getDatabase());
    type.forEach(function (item, index) {
        // console.log(location + "outpass/" + item)
        const db = getDatabase();
        const data = ref(db, location + "outpass/" + item);
        onValue(data, (snapshot) => {
            // get(child(dbRef, location + "outpass/" + item)).then((snapshot) => {
            var sr_no = 0;
            if (snapshot.exists()) {
                for (let data in snapshot.val()) {
                    var address = snapshot.val()[data]['address']
                    var from = snapshot.val()[data]['from']
                    var to = snapshot.val()[data]['to']
                    var reason = snapshot.val()[data]['reason']
                    sr_no += 1;
                    data_table_outpass = `
                    <tr class="alert" role="alert">
                    <th scope="row">${sr_no}</th>
                    <td>${address}</td>
                    <td style="padding: 30px 10px;">${from}</td>
                    <td style="padding: 30px 10px;">${to}</td>
                    <td>${reason}</td>
                    <td>${item}</td>
                    </tr>
                    `
                    data_content_outpass.push(data_table_outpass)

                }

                a_outpass = `
                <section class="ftco-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-wrap">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Sr No.</th>
                                            <th>Address</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Reason</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>`
                b_outpass = `       
                </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
                </section>`
                data_content_outpass.forEach(function (item, index) {

                    a_outpass = a_outpass + data_content_outpass[index]
                    //   console.log(item);
                });
                adder_table_outpass = a_outpass + b_outpass

            }


            else {
                console.log("No data available");
            }
            // return ("sahil")
        })
    });


}
// for complaint
var data_table_complaint;
var adder_table_complaint;
let data_content_complaint = [];
let a_complaint;
let b_complaint;
let types = ['pending']
// let output_data_outpass;
// function to fetch data for display from firebase
// const sahil = 0;
function get_data_complaint(location) {
    const dbRef = ref(getDatabase());
    types.forEach(function (item, index) {
        const db = getDatabase();
        const data = ref(db, location + "complaint/");
        onValue(data, (snapshot) => {
            var sr_no = 0;
            console.log(location + "complaint/")
            if (snapshot.exists()) {
                for (let data in snapshot.val()) {
                    var address = snapshot.val()[data]['address']
                    var from = snapshot.val()[data]['from']
                    var to = snapshot.val()[data]['to']
                    var reason = snapshot.val()[data]['reason']
                    sr_no += 1;
                    data_table_complaint = `
                    <tr class="alert" role="alert">
                    <th scope="row">${sr_no}</th>
                    <td>${address}</td>
                    <td style="padding: 30px 10px;">${from}</td>
                    <td style="padding: 30px 10px;">${to}</td>
                    <td>${reason}</td>
                    </tr>
                    `
                    data_content_complaint.push(data_table_complaint)

                }

                a_complaint = `
                <section class="ftco-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-wrap">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Sr No.</th>
                                            <th>Address</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Reason</th>

                                        </tr>
                                    </thead>
                                    <tbody>`
                b_complaint = `       
                </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
                </section>`
                data_content_complaint.forEach(function (item, index) {

                    a_complaint = a_complaint + data_content_complaint[index]
                    //   console.log(item);
                });
                adder_table_complaint = a_complaint + b_complaint

            }


            else {
                console.log("No data available");
            }
            // return ("sahil")
        })
    });


}
// for leave application
var data_table_la;
var adder_table_la;
let data_content_la = [];
let a_la;
let b_la;
// let type = ['pending', 'approve', 'decline']
// let output_data_outpass;
// function to fetch data for display from firebase
// const sahil = 0;
function get_data_la(location) {
    const dbRef = ref(getDatabase());
    type.forEach(function (item, index) {
        const db = getDatabase();
        const data = ref(db, location + "la/" + item);
        console.log(location + "la/" + item)
        onValue(data, (snapshot) => {
            console.log(snapshot.val())
            var sr_no = 0;
            if (snapshot.exists()) {
                for (let data in snapshot.val()) {
                    var address = snapshot.val()[data]['address']
                    var from = snapshot.val()[data]['from']
                    var to = snapshot.val()[data]['to']
                    var reason = snapshot.val()[data]['reason']
                    console.log(address)
                    sr_no += 1;
                    data_table_outpass = `
                    <tr class="alert" role="alert">
                    <th scope="row">${sr_no}</th>
                    <td>${address}</td>
                    <td style="padding: 30px 10px;">${from}</td>
                    <td style="padding: 30px 10px;">${to}</td>
                    <td>${reason}</td>
                    <td>${item}</td>
                    </tr>
                    `
                    data_content_la.push(data_table_outpass)
                }

                a_la = `
                <section class="ftco-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-wrap">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Sr No.</th>
                                            <th>Address</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Reason</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>`
                b_la = `       
                </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
                </section>`
                data_content_la.forEach(function (item, index) {

                    a_la = a_la + data_content_la[index]
                    //   console.log(item);
                });
                adder_table_la = a_la + b_la

            }


            else {
                console.log("No data available");
            }
            // return ("sahil")
        })
    });


}

export { get_data_outpass, get_data_la, get_data_complaint, adder_table_outpass, adder_table_la, adder_table_complaint }
// get_data("/student/21185/pending/outpass/2022-6-18_21:21:28")

get_data_outpass("/student/21185/")
get_data_la("/student/21185/")
get_data_complaint("/student/21185/")

