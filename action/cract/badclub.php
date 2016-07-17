<?php SESSION_START();
$servername = 'localhost';
$username = 'kcalt';
$password = 'IAoEyoTwFe1aqHgO';
$dbname = 'kcalt';
$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    die('Conn error: ' . $conn->connect_error);
}

//Time
$Tbad = "
    SELECT * FROM kcalt.$Tday
    WHERE Owner IS NOT NULL AND (T BETWEEN $Tstr AND $Tend);
";

$result = $conn->query($Tbad);
$Badmin = mysqli_fetch_assoc($result);
$Bmin = $Badmin['T'];
$Bclub = $Badmin['Owner'];

while ($Tbad = mysqli_fetch_assoc($result)){
    $Bmaxx = $Tbad;
    $Bmax = $Bmaxx['T'];
}

echo $Tday;
echo "Time is occupied next $Tday from ";

$Tmin = $Tnum = $Bmin;
include 'num2T.php';

echo 'to ';

$Tmax = $Tnum = $Bmax;
include 'num2T.php';

echo "<br><br>You may contact the manager of $Bclub to solve this conflict.";

$conn->close;
?>
