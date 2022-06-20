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

let pending = document.getElementById('pending')
let approved = document.getElementById('approved')
let declined = document.getElementById('declined')
let content_table = document.getElementById('content_table')

pending.addEventListener('click', pending_fxn)
approved.addEventListener('click', approved_fxn)
declined.addEventListener('click', declined_fxn)

function pending_fxn() {
    console.log('pending')
}

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
    no_of_times_approved+=1 
    content_table.innerHTML = a_approved + b_approved;
} // function

var data_content_declined = [];
var a_declined;
var b_declined;
var data_table_declined;
var no_of_times_declined = 0;
function approved_fxn() {
    const db = getDatabase();
    const data = ref(db, 'student/' + "21185" + "/la/pending/");
    if (no_of_times_declined == 0) {
        onValue(data, (snapshot) => {
            console.log(snapshot.val())
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
    no_of_times_declined+=1 
    content_table.innerHTML = a_declined + b_declined;
} // function

function declined_fxn() {
    console.log('declined')
}