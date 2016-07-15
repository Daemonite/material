<!DOCTYPE html>
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
	<link href="../css/base.min.css" rel="stylesheet">
    <link href="../css/mine.css" rel="stylesheet">

	<!-- Upper Left nav drawer icon -->
</head>
<body class="page-brand">
	<header class="header header-transparent header-waterfall ui-header">
		<ul class="nav nav-list pull-left">
			<li>
				<a data-toggle="menu" href="#act_menu">
					<span class="icon icon-lg">menu</span>
				</a>
			</li>
		</ul>
		<a class="header-logo margin-left-no" href="index.html">KcalT</a>
		<ul class="nav nav-list pull-right">
			<li class="dropdown margin-right">
<!-- Upper Right Avatar -->
				<a class="dropdown-toggle
							padding-left-no
							padding-right-no"
							data-toggle="dropdown">
					<span class="access-hide">Club Name - upper right</span>

					<span class="avatar avatar-sm">
						<img alt="alt text for Club avatar"
								src="images/users/avatar-001.jpg">
					</span>
				</a>
				<ul class="dropdown-menu dropdown-menu-right">
					<li>
						<a class="padding-right-lg waves-attach"
								href="javascript:void(0)">
							<span class="icon icon-lg margin-right">account_box</span>
							Club Profile
						</a>
					</li>
					<li>
						<a class="padding-right-lg waves-attach"
								href="javascript:void(0)">
							<span class="icon icon-lg margin-right">add_to_photos</span>
							Upload Photo</a>
					</li>
					<li>
						<a class="padding-right-lg waves-attach"
								href="page-login.html">
							<span class="icon icon-lg margin-right">exit_to_app</span>
							Logout</a>
					</li>
				</ul>
			</li>
		</ul>
	</header>
<!-- Left navigation drawer -->
	<!-- drawer title -->
	<nav class="menu menu-left nav-drawer nav-drawer-md" id="act_menu">
		<div class="menu-scroll">
			<div class="menu-content">
				<a class="menu-logo" href="index.html">ClubMain</a>
				<ul class="nav">
		<!-- nav content -->
				<!--Only display for USER-->
					<li>
						<a class="collaosed waves-attach"
							data-toggle="collapse"
							href="#course-work-sub">
							Course Work
						</a>
						<ul class="menu-collapse collapse" id="course-work-sub">
							<li> <a class="waves-attach" href="useract.html">
									For IGers, ASers, AL2ers</a>
							</li>
							<li> <a class="waves-attach" href="cruser.html">
									Signin or setup to continue</a>
							</li>
						</ul>
					</li>
				<!-- USER's own activity-->
					<li>
						<a class="collapsed waves-attach"
							data-toggle="collapse"
							href="#user-act-sub">
							Your club meet
						</a>
						<ul class="menu-collapse collapse" id="user-act-sub">
							<li> <a class="waves-attach" href="jnclub.html">
								Join a club to continue</a>
							</li>
						</ul>
					</li>
					<!-- CLUB activity, public to people in a club -->
				<!-- CLUB activity, public to pwner of the  club -->
				<!-- This identification work should be done with php-->
					<li>
						<a class="collapsed waves-attach"
							data-toggle="collapse"
							href="#show-act-sub">
							Club Activity
						</a>
						<ul class="menu-collapse collapse" id="show-act-sub">
							<li> <a class="waves-attach" href="showact.html">
								Your activity </a>
							</li>

						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
<!-- Left nav end, there is the central context-->
<!-- Central graphics should show all user's activity in the month-->
<!-- 'Big Calendar' should be deployed -->
	<main class="content">
		<div class="content-header ui-content-header">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-lg-push-3 col-sm-10 col-sm-push-1">
						<h1 class="content-heading">All for one. One for all.</h1>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-lg-push-3 col-sm-10 col-sm-push-1">

					<section class="content-inner margin-top-no">

<!-- central content -->
            <div class="card-main">
                <div class="card-inner">
						<h2 class="content-sub-heading">Creat your club with one click</h2>
						<p>After creating your club, you may set up activities (like presentation, group discussion, club outing, etc) in your club members' calendar.</p>
                        <p>You can easily make roll-calls, distribute questionares and track contributions with kcalT. </p>
<!-- Form for crcalub -->
                	<form action="php/action/cract.php">
                        <div class="form-group form-group-label">
                            <label class="floating-label" for="Cname">Club name, e.g. Flying Noodles Club</label>
                            <input class="form-control" id="Cname" type="text" name="name">
                        </div>

                        <div class="form-group form-group-label">
                            <label class="floating-label" for="Cinfo">Club slogan: e.g. Dive in to Noodles!</label>
                            <input class="form-control" id="Cinfo" type="text" name="info">
                        </div>
                        <div class="">
							<input class="btn waves-attach" type="submit" >
                        </div>
						</form>
<!-- Form ends -->
            </div>
        </div>
					</section>
				</div>
			</div>
		</div>

	</main>

    <!--fbt -->
	<div class="fbtn-container">
        <div class="fbtn-inner">
            <a class="fbtn fbtn-lg fbtn-brand-accent waves-attach waves-circle waves-light"
                href="help.html">
                <span class="fbtn-text fbtn-text-left">
                    Need help?</span>
                <span class="icon">
                    help</span>
            </a>
        </div>
    </div>
    <!-- js -->
    <<script src="https://staticfile.qnssl.com/jquery/2.2.1/jquery.min.js"></script>
    <script src="../js/base.min.js"></script>
    <script src="../js/mine.js"></script>
</body>

</html>
