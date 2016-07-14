<!DOCTYPE html>
<?php SESSION_START(); ?>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta content="IE=edge" http-equiv="X-UA-Compatible">
	<meta content="initial-scale=1.0,
					maximum-scale=1.0,
					user-scalable=no,
					width=device-width"
					name="viewport">

	<title>KcalT Scheduler</title>
	<!-- css -->
	<link href="css/base.min.css" rel="stylesheet">
</head>
<?php
if (isset($_SESSION['user'])) {
	echo $_SESSION['user'];
	echo 'Goof';
} else { include 'frame/signup.php';
	echo '
		<script type="text/javascript">
		var user_type = <?php echo $_SESSION['user']; ?>
		switch(user_type) {
			case user:
				<?php include 'frame/user.php'; ?>
			case club:
			<?php include 'frame/club.php'; ?>
		'
		}
		</script>
}
?>
	<body>

    <!--fbt -->
	<div class="fbtn-container">
        <div class="fbtn-inner">
            <a class="fbtn fbtn-lg fbtn-brand-accent waves-attach waves-circle waves-light"
                href="cont/help.html">
                <span class="fbtn-text fbtn-text-left">
                    Need help?</span>
                <span class="icon">
                    help</span>
            </a>
        </div>
    </div>
    <!-- js -->
	<script src="https://staticfile.qnssl.com/jquery/2.2.1/jquery.min.js"></script>
	<script src="js/base.min.js"></script>
	<script src="js/mine.js"></script>
</body>

</html>
