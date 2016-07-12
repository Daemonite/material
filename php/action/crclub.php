<?php session_start(); ?>

<html>
<body>

<?php include 'conn.php';?>

Welcome, the organizer of the great <?php echo $_POST['club'] . '!'; ?>
<br><br>
Here is your club description:
<br>
    <?php echo '"' . $_POST['info'] . '"'; ?>

    <br><br>
You may create your first activity right now in the 
<a href='/cont/cract.php'>Activity Scheduling</a> page.<br><br>

<?php
$Cname = $Cinfo = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Cname = $_SESSION['clubname'] = vali_input($_POST['club']);
#    $Cname = $_SESSION['clubname'];
    $Cinfo = $_SESSION['clubinfo'] = vali_input($_POST['info']);
#    $Cinfo = $_SESSION['clubinfo'];
}

function vali_input($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}


echo 'NOTE that clubs other than your ' . 
    $_SESSION['clubname'] . 
    " may schedule activities right now. At this moment, two activities may not share the same time slot.<br><br>";

//var = $fkact
$fkact="
	INSERT INTO kcalt.clubz (Cname, Cinfo)
	VALUES ('$Cname', '$Cinfo');

";


include 'db_do.php';
include 'cloz.php';
?>

</body>
</html>
