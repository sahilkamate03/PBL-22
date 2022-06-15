// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database

var contactFormDBA = firebase.database().ref("Approve");


document.getElementById('approveForm').addEventListener("submit", submitForm)
document.getElementById('declineForm').addEventListener("submit", declineForm)

function submitForm(e) {
    // console.log('processing')
    e.preventDefault();

    var name = document.getElementById('nameid').innerHTML;
    // var emailid= getElementVal('emailid');
    // var msgContent= getElementVal('msgContent');

    saveMessages(name, 'Approved');
    console.log(name, 'approved');

    // enable alert
    // document.querySelector('.alert').style.display ='block';

    //remove the alert
    // setTimeout(() =>{
    //     document.querySelector(".alert").style.display= "none";
    // },3000);

    //reset the form 
    // document.getElementById("approveForm").reset();
}
// function declineForm(e) {
//     e.preventDefault();

//     var name = document.getElementById('nameid').innerHTML;
//     // var emailid= getElementVal('emailid');
//     // var msgContent= getElementVal('msgContent');

//     saveMessages(name, 'Declined');
//     console.log(name, 'decline');

//     // enable alert
//     // document.querySelector('.alert').style.display ='block';

//     //remove the alert
//     // setTimeout(() =>{
//     //     document.querySelector(".alert").style.display= "none";
//     // },3000);

//     //reset the form 
//     // document.getElementById("approveForm").reset();
// }

const saveMessages = (name, options) => {
    console.log()


    var newContactForm = contactFormDBA.push()

    newContactForm.set({
        name: name,
        options: options
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};