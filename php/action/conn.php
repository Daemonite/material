<?php
$servername = "localhost";
$username = "kcalt";
$password = "IAoEyoTwFe1aqHgO";

# MySQLi Object-Oriented
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
#echo "Connection Successful. <br><br>";
?>
