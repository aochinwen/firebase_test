// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import {} from 'firebase/auth';
import {} from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCRE_HMgmjYsvb_btcVYc-_Ly7MTjMtSk4",
    authDomain: "taxiwayclosure.firebaseapp.com",
    projectId: "taxiwayclosure",
    storageBucket: "taxiwayclosure.appspot.com",
    messagingSenderId: "697609967663",
    appId: "1:697609967663:web:eab8fba0431c692c004eda",
    measurementId: "G-DP1DMX86LC"
    };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = firebase.getAnalytics(app);
document.getElementById('signup').addEventListener('click',signUpUser)
document.getElementById('emailVerification').style.display='none'

function signUpUser(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=> {
            user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: username
            }).then(function(){
                console.log(user.displayName)
            }) .catch(e=>{
                console.log(e)
            });
            firebase.auth().currentUser.sendEmailVerification()
            .then(()=> {
                document.getElementById('signUpScreen').style.display='none';
                document.getElementById('emailVerification').style.display='block';
            })
        })
        .catch(e=>{
        console.log(e)
    })
}

firebase.auth().onAuthStateChanged(user=>{
    if(user){
        console.log(user)
    } else {}
})