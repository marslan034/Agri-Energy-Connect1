// wwwroot/js/auth.js

function registerUser(email, password, role) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return firebase.firestore().collection("users").doc(user.uid).set({
                email: email,
                role: role
            });
        })
        .then(() => {
            alert("✅ Registered successfully");
            window.location.href = "/Account/Login";
        })
        .catch((error) => {
            alert("❌ " + error.message);
        });
}


function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("✅ Logged in, now redirecting to home...");
            window.location.href = "/Home/Index";
        })
        .catch((error) => {
            alert("❌ " + error.message);
        });
}
