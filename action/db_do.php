<?php
#act  do&check
if ($conn->query($fkact) === TRUE) {;}
else {
    echo 'Error:<br>' . $conn->error;
    }
?>
