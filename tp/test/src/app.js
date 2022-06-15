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
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById('contactForm').addEventListener("submit", submitForm)

function submitForm(e){
    e.preventDefault();

    var name= getElementVal('name');
    var emailid= getElementVal('emailid');
    var msgContent= getElementVal('msgContent');

    saveMessages(name, emailid, msgContent);
    console.log(name, emailid, msgContent);

    // enable alert
    document.querySelector('.alert').style.display ='block';

    //remove the alert
    setTimeout(() =>{
        document.querySelector(".alert").style.display= "none";
    },3000);

    //reset the form 
    document.getElementById("contactForm").reset();
}

const saveMessages= (name, emailid, msgContent) =>{
    var newContactForm = contactFormDB.push()

    newContactForm.set({
        name : name,
        emailid : emailid,
        msgContent : msgContent,
    })
}

const getElementVal = (id) =>{
    return document.getElementById(id).value;
};