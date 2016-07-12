<html>
Choose a DATE to clean
<br>
<br>
<form name="cleanDB" action="/action/cleanDB.php" method="get">
	<input type="radio" name="day" value="Mon">Monday
        <input type="radio" name="day" value="Tue">Tuesday
        <input type="radio" name="day" value="Wen">Wendesday
        <input type="radio" name="day" value="Thu">Thursday
        <input type="radio" name="day" value="Fri">Friday
	<input type="radio" name="day" value="All">Clear All
<input type="submit" name="cleanDB" value="CLEAN DB" />
</form>


<?php
$temp = $_GET['day'];
if (	$temp != 'Mon'&& 
	$temp != 'Tue' && 
	$temp != 'Wen' && 
	$temp != 'Thu' && 
	$temp != 'Fri'){
	echo 'Then all?<br><br>';
	}
else {
	include 'conn.php';
	$fkact = "
		UPDATE kcalt.$temp
		SET Owner = NULL
		WHERE T BETWEEN 49 AND 158;
	";
	#echo $fkact;
	include 'db_do.php';
	include 'cloz.php';
}

if ($temp = 'All') {
	echo 'Which is better, using switch or pushing CLEAN five times?';}
?>
</html>
