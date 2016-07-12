<?php
$servername = "localhost";
$username = "kcalt";
$password = "IAoEyoTwFe1aqHgO";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfull <br>";


//execute


//ALTER TABLE `ExtT` ADD `Used` TINYINT(1) NOT NULL DEFAULT '1' COMMENT '0 for used, 1 for available.' ;

//table check

//insert t
$WhichDay = "Monday";
echo $WhichDay;

for($t=1;$t<;$t++){

	$sql = "
	UPDATE kcalt.ExtT
	SET $WhichDay=0
	WHERE T=$t
	";

if ($conn->query($sql) === TRUE) {
	echo "Success'$t'<br>";
	} else {
		echo "Error:<br>" . $conn->error;
	}
}

$conn->close();

?> 
