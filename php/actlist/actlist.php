<?php SESSION_START(); ?>

<html>
<?php
$_SESSION['Lday'] = 'Mon';
echo $_SESSION['Lday'] . ':<br>';
?>
<iframe src="list.php" frameborder='1px' scrolling='yes' height='1000px' width='20%' noresize='noresize'></iframe>
<br><br>

<?php
$_SESSION['Lday'] = 'Tue';
echo $_SESSION['Lday'] . ':<br>';
?>
<iframe src="list.php" frameborder='1px' scrolling='yes' height='100px' width='20%' noresize='noresize'></iframe>
<br><br>

<?php
$_SESSION['Lday'] = 'Wen';
echo $_SESSION['Lday'] . ':<br>';
?>
<iframe src="list.php" frameborder='1px' scrolling='yes' height='100px' width='20%' noresize='noresize'></iframe>
<br><br>

<?php
$_SESSION['Lday'] = 'Tue';
echo $_SESSION['Lday'] . ':<br>';
?>
<iframe src="list.php" frameborder='1px' scrolling='yes' height='100px' width='20%' noresize='noresize'></iframe>
<br><br>

<?php
$_SESSION['Lday'] = 'Fri';
echo $_SESSION['Lday'] . ':<br>';
?>
<iframe src="list.php" frameborder='1px' scrolling='yes' height='100px' width='20%' noresize='noresize'></iframe>
<br><br>

</html>
