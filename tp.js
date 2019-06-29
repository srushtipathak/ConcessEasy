

var add = document.getElementById("address");

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


var messageRef = firebase.database().ref();




messageRef.on("child_added", function (snapshot) {
    var college = snapshot.val();
    add = college.Address;
    check(add);
   
});

function check(add) {
    document.getElementById('address').innerHTML = '<td>' + add + '</td>';
}
