    <div class='card'>
        <div class='card-main'>
            <div class='card-inner'>
    <h3 class='content-sub-heading'>Error! You have run into a schedule conflict, information below may help you solve it.</h3>
    <p>You can always check public events in <a href='../cont/pubact.php'>Public Events Page</a>.</p>
    <div class='card'>
        <div class='card-main'>
            <div class='card-inner'>
    <br><p>Time not available during your selected time, </p>
    please choose another time instead.<br><br>
<?php
SESSION_START();
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

echo "<br><br>You may contact the manager of $Bclub to solve this conflict.<br><br>";

$conn->close;

include 'clock.php';
echo '<br><br>';
?>
