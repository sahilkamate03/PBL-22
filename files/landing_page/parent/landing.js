// firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, ref, child, get, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

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

let pending = document.getElementById('pending')
let approved = document.getElementById('approved')
let declined = document.getElementById('declined')
let content_table = document.getElementById('content_table')

pending.addEventListener('click', pending_fxn)
approved.addEventListener('click', approved_fxn)
declined.addEventListener('click', declined_fxn)


// function pending_fxn() {
//     console.log('pending')
// }

var data_content_approved = [];
var a_approved;
var b_approved;
var data_table_approved
var no_of_times_approved = 0;
function approved_fxn() {
    const db = getDatabase();
    const data = ref(db, 'student/' + "21185" + "/la/pending/");
    if (no_of_times_approved == 0) {
        onValue(data, (snapshot) => {
            console.log(snapshot.val())
            let sr_no = 0;
            for (let data in snapshot.val()) {
                var address = snapshot.val()[data]['address']
                var from = snapshot.val()[data]['from']
                var to = snapshot.val()[data]['to']
                var reason = snapshot.val()[data]['reason']
                sr_no += 1;
                data_table_approved = `
            <tr class="alert" role="alert">
            <th scope="row">${sr_no}</th>
            <td>${address}</td>
            <td style="padding: 30px 10px;">${from}</td>
            <td style="padding: 30px 10px;">${to}</td>
            <td>${reason}</td>
            </tr>
            `
                data_content_approved.push(data_table_approved)
                // console.log(data_content_approved);
            } //for loop 
            // console.log()
            a_approved = `
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
            b_approved = `       
                </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
                </section>`
            data_content_approved.forEach(function (item, index) {
                a_approved = a_approved + data_content_approved[index]
            }) //daa_content_approved_forEach

        }); //onValue
    } //if statement
    no_of_times_approved += 1
    content_table.innerHTML = a_approved + b_approved;
} // function

var data_content_declined = [];
var a_declined;
var b_declined;
var data_table_declined;
var no_of_times_declined = 0;
function declined_fxn() {
    const db = getDatabase();
    const data = ref(db, 'student/' + "21185" + "/la/pending/");
    if (no_of_times_declined == 0) {
        onValue(data, (snapshot) => {
            console.log(snapshot.val())
            alert('Database data loaded')
            let sr_no = 0;
            for (let data in snapshot.val()) {
                var address = snapshot.val()[data]['address']
                var from = snapshot.val()[data]['from']
                var to = snapshot.val()[data]['to']
                var reason = snapshot.val()[data]['reason']
                sr_no += 1;
                data_table_declined = `
            <tr class="alert" role="alert">
            <th scope="row">${sr_no}</th>
            <td>${address}</td>
            <td style="padding: 30px 10px;">${from}</td>
            <td style="padding: 30px 10px;">${to}</td>
            <td>${reason}</td>
            </tr>
            `
                data_content_declined.push(data_table_declined)
                // console.log(data_content_approved);
            } //for loop 
            // console.log()
            a_declined = `
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
            b_declined = `       
                </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
                </section>`
            data_content_declined.forEach(function (item, index) {
                a_declined = a_declined + data_content_declined[index]
            }) //daa_content_approved_forEach

        }); //onValue
    } //if statement
    no_of_times_declined += 1
    content_table.innerHTML = a_declined + b_declined;
} // function

var data_content_pending = [];
var a_pending;
var b_pending;
var data_table_pending;
var no_of_times_pending = 0;
function pending_fxn() {

    content_table.innerHTML = `
    <section class="ftco-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-wrap">
                                    <table class="table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>Reg No.</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Reason</th>
                                                <th>Address</th>
                                                <th>Mobile No.</th>
                                                <th style="text-align:right;"></th>
                                                <th style="text-align:right;"></th>
                                                <!-- <th style="text-align: center;">Accept/Reject</th> -->
                                                <!-- <th>A/R</th> -->
                                                <!-- <th>Date</th> -->
                                            </tr>
                                        </thead>
                                        <tbody>                                    
                                            <tr class="alert" role="alert">
                                                <th scope="row" class='sr_no'>21185</th>
                                                <td style="padding: 30px 10px;">15 Jun 2022</td>
                                                <td style="padding: 30px 10px;">10 July 2022</td>
                                                <td>Sister Wedding</td>
                                                <td>Gujarat</td>
                                                <td>8767272564</td>
                                                <td>                
                                                    <a href="#" class="close accept" data-dismiss="alert" aria-label="Close" style='text-align: center;'>
                                                        <span class="doing-accept" aria-hidden="true" style='font-size:14px; color:green;' >Accept</span>
                                                    
                                                    </a>
                                                </td>
                                                <td>                                                                                                         
                                                    <a href="#" class="close" data-dismiss="alert" aria-label="Close">
                                                        <span aria-hidden="true" class="doing-decline" style='font-size:14px;'>Reject</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    `;

} // function


// document.querySelector('.doing-accept').addEventListener('click',()=>{
//     console.log('doing-accept');
// })
// function declined_fxn() {
//     console.log('declined')
// }

var from;
var from_text;
var to;
var to_text;
var reason;
var reason_text;
var reg_no;
var reg_no_text;
var address;
var address_text;
var mobile_no;
var mobile_no_text;
const key = document.querySelector('body')
key.addEventListener('click', (e) => {
    if (e.target.className == 'doing-accept') {
        console.log("doing accept")

        mobile_no = e.target.parentElement.parentElement.previousElementSibling
        mobile_no_text = e.target.parentElement.parentElement.previousElementSibling.innerText

        address = mobile_no.previousElementSibling
        address_text = mobile_no.previousElementSibling.innerText

        reason = address.previousElementSibling
        reason_text = address.previousElementSibling.innerText

        to = reason.previousElementSibling
        to_text = reason.previousElementSibling.innerText

        from = to.previousElementSibling
        from_text = to.previousElementSibling.innerText

        reg_no = from.previousElementSibling
        reg_no_text = from.previousElementSibling.innerText

        accept_parent(reg_no_text, from_text, to_text, reason_text, address_text, mobile_no_text)
    }

    else if (e.target.className == 'doing-decline') {
        console.log("doing decline")

        mobile_no = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling
        mobile_no_text = e.target.parentElement.parentElement.previousElementSibling.innerText

        address = mobile_no.previousElementSibling
        address_text = mobile_no.previousElementSibling.innerText

        reason = address.previousElementSibling
        reason_text = address.previousElementSibling.innerText

        to = reason.previousElementSibling
        to_text = reason.previousElementSibling.innerText

        from = to.previousElementSibling
        from_text = to.previousElementSibling.innerText

        reg_no = from.previousElementSibling
        reg_no_text = from.previousElementSibling.innerText

        declined_parent(reg_no_text, from_text, to_text, reason_text, address_text, mobile_no_text)
    }


})

function accept_parent(reg_no, from, to, reason, address, mobile_no) {
    const db = getDatabase();
    var today = new Date();
    set(ref(db, 'parent/req/la/approved/' + reg_no + '/' + from + '_' + to), {
        from: from,
        to: to,
        reason: reason,
        address: address,
        mobile_no: mobile_no
    });
    remove(ref(db,'parent/req/la/pending/' + reg_no + '/' + from + '_' + to),{})
    req_fwd (reg_no, from, to, reason, address, mobile_no)
}

function declined_parent(reg_no, from, to, reason, address, mobile_no) {
    const db = getDatabase();
    set(ref(db, 'student/req/la/declined/' + reg_no + '/' + from + '_' + to), {
        from: from,
        to: to,
        reason: reason,
        address: address,
        mobile_no: mobile_no
    });
    console.log('done')
}

function req_fwd(reg_no, from, to, reason, address, mobile_no) {
    const db = getDatabase();
    set(ref(db, 'warden/req/la/pending/' + reg_no + '/' + from + '_' + to), {
        from: from,
        to: to,
        reason: reason,
        address: address,
        mobile_no: mobile_no
    });
    console.log('done')
}
// window.onload = console.log("loaded");