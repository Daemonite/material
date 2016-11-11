<?php
#Input number return xx:xx
#$Tnum = 36;
#Hour
if ($Tnum%12 == 0) {
    $Tnum -= 12;
}
$hurT = ($Tnum-$Tnum%12)/12+8;

if ($hurT < 10) {
    echo '0' . $hurT . ':';
} else {
    echo $hurT . ':';    
}

#minute
$minT = $Tnum%12;
switch ($minT) {
    case '0':
	echo '55';
	break;
    case '1':
	echo '00';
	break;
    case '2':
	echo '05';
	break;
    default:
	echo ($minT-1)*5;
}
$Tnum = $hurT = $minT = '';
?>

