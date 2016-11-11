<?php
$servername = 'localhost';
$username = 'kcalt';
$password = 'IAoEyoTwFe1aqHgO';
$dbname = 'kcalt';

# MySQLi Object-Oriented
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die('Conn error: ' . $conn->connect_error);
}
#echo 'Connection Successful. <br><br>';
?>
