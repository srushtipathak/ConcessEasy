<?php
$connection = mysqli_connect("localhost", "root", "","student"); // Establishing Connection with Server
 // $db = mysqli_select_db("quizonn", $connection); // Selecting Database from Server
//if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$email = $_POST['email'];
$password = $_POST['password'];
if($connection==true){
	//echo "established";
	$sql = "SELECT psw FROM login WHERE email LIKE '{$email}' and password LIKE '{$password}'";
	$result=mysqli_query($connection,$sql);
	if (mysqli_num_rows($result)!=1){
		alert("string");
		//echo "<script>alert('Failure!');</script>";
		header('Location: studentPortal.php');
	
	}
	else{
		session_start();
		//header('Location: studentPortal.php');
		$_SESSION["n"] = "$email";
		echo "hiii";
	}
}
else{
	echo "not connected";
}

//Insert Query of SQL
/*$query = mysql_query("insert into acc(uname, psw) values ('$name', '$psw')");
echo "<br/><br/><span>Data Inserted successfully...!!</span>";
*/
mysqli_close($connection); // Closing Connection with Server
/*}
else{
	echo "tatti";
}*/
?>