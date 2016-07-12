<?php
session_start();
#demo.jb51.net/js/2013/placeholder
#input[type=password]
?>


<html>

<body>
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

<?php
#<input type="text" placeholder="E.g. Flying Noodles Club" name="club" />
#<input type="text" placeholder="E.g. Dive in to Noodles in FN club" name="info" />
?>


<form name="crclub" action="/action/crclub.php" method="post">
	<input type="text" 
		placeholder="Club name: e.g. Flying Noodles Club" 
		name="club" />
	<br>

	<input type="text" 
		placeholder="Club slogan: e.g. Dive in to Noodles!" 
		name="info" />
	<br>
	<input type="submit" name="submit" value="Get your club profiled right away!" />
</form>
</body>

</html>
