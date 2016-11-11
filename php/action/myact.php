<?php
session_start();
?>

<html>

<body>
Here are the blocks for your activity:<br> 
<?php
include 'conn.php';
$Town = $_SESSION['clubname'];
$Town = str_replace(' ','%',$Town);
#echo $Town . '<br>';


$sql = "SELECT * FROM kcalt.Mon WHERE Owner LIKE '$Town'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $Tnum = $row['T'];
#	echo $Tnum;
        include 'num2T.php';
        echo '<br>';
        include 'clock/clockmain.php';
    }
} else {
    echo '0 result';
}

include 'cloz.php';
?>
</body>
</html>
