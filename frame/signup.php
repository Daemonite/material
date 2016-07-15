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

<?php include 'left_avatar.php'; />

		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-lg-push-3 col-sm-10 col-sm-push-1">

					<section class="content-inner margin-top-no">
						<div class="card">
							<div class="card-main">
								<div class="card-inner">
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
								</div>
							</div>
						</div>
						
						<h2 class="content-sub-heading">Demo 1</h2>
						<p>Below are test text for test purpose only</p>
						<div class="tile-wrap">
							<a class="tile waves-attach" href="https://chemfan.science">
								<div class="tile-inner">
									<span class="text-black">Link to my blog</span>
								</div>
							</a>
							<form action="php/action/cract.php">
								<input class="form-control" id="act_Dpiker" type="text">
								<!-- REMEMBER to use GET instead of POST (for the sake of js???) in action php file -->
								<input type="submit" >
								<a class="btn btn-green waves-attach" href="php/action/cract.php">.btn-green</a>
							</form>
						</div>
					</section>
