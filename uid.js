
var config = {
    apiKey: "AIzaSyA7qUIaeGXiS0zbOLThUx6ahRDP-a2F9TY",
    authDomain: "collegedb-a0cc0.firebaseapp.com",
    databaseURL: "https://collegedb-a0cc0.firebaseio.com",
    projectId: "collegedb-a0cc0",
    storageBucket: "collegedb-a0cc0.appspot.com",
    messagingSenderId: "744971666348"
};
firebase.initializeApp(config);

console.log(firebase);


var messageRef = firebase.database().ref().child('College');



document.getElementById('uidform').addEventListener('submit', submitForm);





function submitForm(e) {
    e.preventDefault();
    var sap = document.getElementById('uid').value;
    //var password = document.getElementById('psw').value;
    //var email = document.getElementById('email').value;
    //alert(username);
    console.log(sap);
    sendMessage(sap);
}


function getInputval(id) {
    return document.getElementById(id).value;
}

function sendMessage(sap) {
    messageRef.on("child_added", function (snapshot) {
        var uid1 = snapshot.key;
        console.log(uid1);
        if (uid1 == sap) {

            var uid2 = snapshot.val();
            alert(uid2.Address + " " + uid2.Email + " " + uid2.Name+ " "+uid2.Department )
            

        }
    });
    


}