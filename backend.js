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

var dbRef = firebase.database().ref("Student");

dbRef.on("child_added", function (snapshot) {
    var detail = snapshot.val();
    sap = detail.SapID;
    name = detail.Name;
    // var selector = document.getElementById('class');
    // var value = selector[selector.selectedIndex].value;
    trainClass = "First"; 
    station = detail.Address;
    $("#tableBody").append("<tr><td>"+sap+"</td><td>"+name+"</td><td>"+trainClass+"</td><td>"+station+"</td><td>"+"First"+"</td><td>"+new Date()+"</td><td>"+ "<a class='btn btn-sm btn-info' href='#''>Send Unique ID</a>" + "</td></tr>");
    // check(sap,name,trainClass,station,"First",new Date()); 
});

// function check(sap,name,trainclass,station,year,date) {
//     document.getElementById('sap').innerHTML = '<td>' + sap + '</td>';
//     document.getElementById('name').innerHTML = '<td>' + name + '</td>';
//     document.getElementById('trainClass').innerHTML = '<td>' + trainclass + '</td>';
//     document.getElementById('station').innerHTML = '<td>' + station + '</td>';
//     document.getElementById('year').innerHTML = '<td>' + year + '</td>';
//     document.getElementById('date').innerHTML = '<td>' + date + '</td>';
// }