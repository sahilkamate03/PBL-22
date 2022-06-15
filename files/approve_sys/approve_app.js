import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, ref, child, get, update , remove} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

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

function approve_req(authority, usname, student, type_of_appplication, reason, fwd_to) {
    const db = getDatabase();
    update(ref(db,authority + '/' + usname + '/' + 'approve/' + type_of_appplication), {
        student: student,
        reason: reason
    })
    
    .then(() => {
        // Data saved successfully!
        update(ref(db, fwd_to + '/' + 'pending/' + type_of_appplication), {
            student: student,
            reason: reason
        });
        // Data saved successfully!
        remove(ref(db, authority + '/' + usname + '/' + 'pending/' + type_of_appplication), {
            student: student,
            reason: reason
        });
    })

    .catch((error) => {
        // The write failed...
        console.log(error)
    });
    
}

function decline_req(student, type_of_appplication, reason, authority_declined) {
    const db = getDatabase();
    update(ref(db, 'student/' + student + '/decline/' + type_of_appplication), {
        authority_declined: authority_declined,
        reason: reason
    });
}

function pend_req(authority,usname,student, type_of_appplication, reason) {
    const db = getDatabase();
    update(ref(db, authority + '/' + usname + '/' + 'pending/' + type_of_appplication), {
        student: student,
        reason: reason
    });
}

console.log("start")
// approve_req("parent","sahil_parent","21185","outpass","for timepass","warden")

// pend_req("parent","sahil_parent","sahil kamate","outpass","timepass")