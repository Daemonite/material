<?php
session_start();
if (isset($_SESSION['clubname'])){
	echo
		' Welcome, the manager of ' . $_SESSION['clubname'] .
		'!<br><br> Why not' .
		'<p> <a href="/cont/cract.php"> Create Activities</a>?</p>' .
		'<p> <a href="/cont/myact.php"> Check Activities</a>?</p>' .
		'Nyaa~<br><br>' .
		$_SESSION['clubname'] .
		'<a href="/action/logout.php"> is NOT you</a> ?<br><br>' .
		'Nyaa~'
		;} else {
			echo
			'<p> <a href="/cont/crclub.php"> Create Club</a></p>'
			;}
?>
