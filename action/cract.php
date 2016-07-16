<!DOCTYPE html>
<html>
<head><?head>
<body>
<?php SESSION_START(); ?>

<?php
#validate inputs
function vali($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $inpuy = htmlspecialchars($input);
    return $input;
}
#$input = $Tday = $Tstr = $Bmin = $Tend = $Bmax = $Town = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $Tday = $_POST['day'];
    $Tstr = $_POST['strh']*12+$_POST['strm'];
    $Tend = $_POST['endh']*12+$_POST['endm'];
    $Town = $_SESSION['clubname'];
}

#Availability check: row_num+comparison
include 'conn.php';
$Tend -= 1;
$fkact = "SELECT Owner FROM kcalt.$Tday
	WHERE Owner IS NULL AND (T BETWEEN $Tstr AND $Tend);
	";
if ($result = $conn->query($fkact)) {
	$row_cnt = $result->num_rows;
	$result->close();
}
include 'cloz.php';

if ($row_cnt < $Tend - $Tstr){
	echo '<br>Time not available during your selected time, ' .
    	'please choose another time instead.<br><br>';
	include 'cract/badclub.php';
    include 'clock.php';
} else {
	include 'conn.php';
	for ($t = $Tstr; $t < $Tend; $t++;) {
		$fkact = "
		    UPDATE kcalt.$Tday
		    SET Owner = '$Town'
		    WHERE T = $t;
		";
	}
#    include 'db_do.php'
	include 'cloz.php';
}
?>

<br>
<p><a href='../index.php'>Return to the Index</a>
</body>
</html>
