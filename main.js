// setting firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZvxCCBL-cyMChESdBG9KUlIb3wWWLVvY",
    authDomain: "login-form-a4404.firebaseapp.com",
    projectId: "login-form-a4404",
    storageBucket: "login-form-a4404.appspot.com",
    messagingSenderId: "549082239986",
    appId: "1:549082239986:web:7da39c03329371cb1e516b"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up");
            console.log(result);
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            // ..
        });
}

// signin function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);

    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in
            document.write("You are Signed In");
            console.log(result);
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            // ..
        });
}