<?php
$servername = "localhost";
$username = "kcalt";
$password = "IAoEyoTwFe1aqHgO";
$dbname = "kcalt";

$conn =  new mysqli($servername,$username,$password,$kcalt);
if ($conn->connect_error) {
    die('Conn failure' . $conn->connect_error);
}


$sql = "SELECT T,Owner FROM kcalt.Mon";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
	if ($row["Owner" != NULL]) {
            echo $row["T"] . $row["Owner"] . "<br>";
	}
    }
} else {
    echo "0 result";
}

#while($row = mysql_fetch_assoc($dave)){
#    foreach($row as $cname => $cvalue){
#        print "$cname: $cvalue\t";
#    }
#    print "\r\n";
#}

$conn->close();
?>
