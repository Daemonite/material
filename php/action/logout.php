<?php 
session_start();
session_unset();
session_destroy();
#session_unset($_SESSION['clubname']);
#session_unset($_SESSION['clubinfo']);
echo 'Logout Successful<br><br>Redirecting to the index...';
?>

<html>
<head>
<meta http-equiv='refresh' content='1; url=/frame/clubmain.php' />
</head>
</html>
