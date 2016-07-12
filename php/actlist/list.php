<?php
SESSION_START();
$servername = 'localhost';
$username = 'kcalt';
$password = 'IAoEyoTwFe1aqHgO';
$dbname = 'kcalt';

$conn =  new mysqli($servername,$username,$password,$kcalt);
if ($conn->connect_error) {
    die('Conn failure' . $conn->connect_error);
}

$Tday = $_SESSION['Lday'];
$sql = "SELECT T,Owner FROM kcalt.$Tday";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
	if ($row['Owner']) {
            echo $row['T'] . $row['Owner'] . '<br>';
	}
    }
} else {
    echo '0 result';
}


$conn->close();
?>
