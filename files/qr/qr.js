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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var token;
var element = {};

function getParameters() {
    let urlString =
        window.location.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for (let pair of queryString.entries()) {
        // console.log("Key is:" + pair[0]);
        // console.log("Value is:" + pair[1]);
        var key = pair[0]
        var value = pair[1]
        element[key] = value;
        // element.quantity = pair[1];
    }
}
getParameters()

var qrcode = undefined;
function generateQRCode(value) {
    console.log("running")
    if (qrcode === undefined) {
        qrcode = new QRCode(document.getElementById('qrcode'), value);
        // console.log('if')
    } else {
        qrcode.clear();
        qrcode.makeCode(value);
        // console.log('else')
    }
}

// console.log(element)
token = element['token']
// console.log(element)

if (element['type'] == 'scan') {
    generateQRCode(`http://127.0.0.1:5500/files/qr/qr_data.html?token=${element['token']}&type=data`)
    print_btn.addEventListener('click', () => { window.print() })
} else {
    // console.log('hello')
    document.querySelector('.first-column').remove()
    document.querySelector('.content_table').innerHTML = ''
    const db = getDatabase();
    const data = ref(db, "live/" + token);
    console.log(token)
    var today = new Date();
    onValue(data, (snapshot) => {
        console.log(snapshot.val()['from'])
        var data = snapshot.val()
        var from = snapshot.val()['from'].split('-')
        console.log(from)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        // if (date.to ) {
        //     console.log('done')
        // } else {
        //     console.log('not')
        // }
        if (Date(date) <= Date(from)) {
            console.log('hello')
            document.querySelector('.content_table').innerHTML = `
            <div style='    background-color: #71fdce;width: 70%;display: flex;flex-direction: column;align-content: center;flex-wrap: wrap;padding:30px'>
            <h1 style='color:white;'><b>Approved</b></h1>
            <br>
            <h4>Reg No  : </h4> ${data['reg_no']}<br><br><br>
            <h4>Name : </h4> ${data['from']}<br><br><br>
            <h4>To : </h4> ${data['to']}<br><br><br>
            <h4>Address : </h4> ${data['address']}<br><br><br>
            <h4>Mobile Number : </h4> ${data['mobile_no']}<br><br><br>
            `
            console.log(snapshot.val()['outdate'])
            if (snapshot.val()['out_date']== undefined){
            // const db = getDatabase();
            update(ref(db, "live/" + token), {
                out_date: date
            })}

            else{
            // const db = getDatabase();
            update(ref(db, "live/" + token), {
                in_date: date
            })}
        } else {
            document.querySelector('.content_table').innerHTML = `
            <div style='    background-color: ##fd7171;width: 70%;display: flex;flex-direction: column;align-content: center;flex-wrap: wrap;padding:30px'>
            <h1 style='color:white;'><b>Decline</b></h1>
            <br>
            <h4>Reg No  : </h4> ${data['reg_no']}<br><br><br>
            <h4>Name : </h4> ${data['from']}<br><br><br>
            <h4>To : </h4> ${data['to']}<br><br><br>
            <h4>Address : </h4> ${data['address']}<br><br><br>
            <h4>Mobile Number : </h4> ${data['mobile_no']}<br><br><br>
            `
        }
    })
}

var print_btn = document.getElementById('print_btn')


// generateQRCode('sahil')