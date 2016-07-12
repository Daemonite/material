<?php session_start(); ?>

<html>
<body>
<?php
echo 'Hello, here you can set an activity schedule for your ' . 
	$_SESSION['clubname'] . 
	'.<br>';
?>

<style>
        input[type=text],[type=submit]{
            border-color: #bbb;
            height: 38px;
            font-size: 14px;
            border-radius: 2px;
            outline: 0;
            border: #ccc 1px solid;
            padding: 0 10px;
            width: 254px;
            -webkit-transition: box-shadow .5s;
            margin-bottom: 15px;
        }

            input[type=text]:hover, input[text=text]:focus {
                border: 1px solid #56b4ef;
                box-shadow: inset 0 1px 3px rgba(0,0,0,.05),0 0 8px rgba(82,168,236,.6);
                -webkit-transition: box-shadow .5s;
            }
        input::-webkit-input-placeholder {
            color: #999;
            -webkit-transition: color .5s;
        }

        input:focus::-webkit-input-placeholder, input:hover::-webkit-input-placeholder {
            color: #c2c2c2;
            -webkit-transition: color .5s;
        }
</style>


<p>Please select the day in which your activity is held next week.</p>

<form name="cract" action="/action/cract.php" method="post">
	<input type="radio" name="day" value="Mon">Monday
	<input type="radio" name="day" value="Tue">Tuesday
	<input type="radio" name="day" value="Wen">Wednesday
	<input type="radio" name="day" value="Thu">Thursday
	<input type="radio" name="day" value="Fri">Friday

	<br><br>
	<select name="strh">
		<?php include 'cract/opt_hor.html'; ?>
	</select>
	:
	<select name="strm">
                <?php include 'cract/opt_min.html'; ?>
	</select>
	Starting time

	<br><br>
	<select name="endh">
                <?php include 'cract/opt_hor.html'; ?>
	</select>
	:
	<select name="endm">
		<?php include 'cract/opt_min.html'; ?>
	</select>
	Ending time

	<br><br>
	<input type="submit" name="cract" value="Create your activity!" />
</form>
</body>
</html>
