document.addEventListener("DOMcontentLoaded", event => {
    const app = firebase.app();
    console.log(app)
    const firebase = require("firebase");
// Required for side-effects
    require("firebase/firestore");

    changeText();
    document.getElementById("firebase").innerHTML = "text is changed"



    
    /*const myPost = db.collection('users').doc('chinwen');

    myPost.get()
        .then(doc => {
            const data = doc.data();
            document.write( data.title + `<br>`)
            document.write( data.createdAt )
            console.log("written to website..............................")
        })*/
});

function changeText(){{
    document.getElementById("firebase").innerHTML = "text is changed"
}}


function googleLogin(){

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
            .then(result =>{
                const user = result.user;
                document.write(`Hello ${user.displayName}`);
                console.log(user)
            })
            .catch(console.log)
}