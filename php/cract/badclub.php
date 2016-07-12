<?php SESSION_START(); 

$servername = 'localhost';
$username = 'kcalt';
$password = 'IAoEyoTwFe1aqHgO';
$dbname = 'kcalt';

$conn =  new mysqli($servername,$username,$password,$kcalt);
if ($conn->connect_error) {
    die('Conn failure' . $conn->connect_erroor);
}
//Time
$Tbad = "
    SELECT * FROM kcalt.$Tday 
    WHERE Owner IS NOT NULL AND (T BETWEEN $Tstr AND $Tend);
";
$result = $conn->query($Tbad);
$Badmin = $result->fetch_assoc();
$Bmin = $Badmin['T'];
$Bclub = $Badmin['Owner'];

while($Tbad = $result->fetch_assoc()){
    $Bmaxx = $Tbad;
    $Bmax = $Bmaxx['T'];
}

echo "Time is occupied next $Tday from ";

$Tmin = $Tnum = $Bmin;
include 'num2T.php';

echo 'to ';

$Tmax = $Tnum = $Bmax;
include 'num2T.php';

echo "<br><br>You may contact the manager of $Bclub to solve this conflict.";


$conn->close;
?>
