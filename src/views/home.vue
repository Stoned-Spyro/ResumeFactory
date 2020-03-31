<template>
<nav class="navbar navbar-expand-lg navbar-dark my-bg-navbar fixed-top">
	<div class="container">
		<a class="navbar-brand" href="#"><strong>Resume</strong>Factory</a>
		<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<a class="nav-link" href="#">Templates</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">FAQ</a>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  English
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				  <a class="dropdown-item" href="#">Ukrainian</a>
				  <a class="dropdown-item" href="#">Russian</a>
				</div>
			  </li>
			<li class="nav-item">
				<a class="nav-link" href="#">Log In</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Sign Up</a>
			</li>
		</ul>
	</div>
</nav>

<div class="overlay text-white my-bg-violet py-5">
	<div class="container text-center py-5">
		<h1 class="my-5">TAKE THE FIRST STEP TO OWN SUCCESS</h1>
		<a class="btn my-btn-main" href="#">Create your resume</a>
	</div>
</div>

<div class="overlay text-white my-bg-pink py-5">
	<div class="container text-center py-5">
		<div class="row">
			<div class="col-8">

				<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img class="d-block w-100" src="" alt="First slide">
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src="" alt="Second slide">
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src="" alt="Third slide">
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>

			</div>
			<div class="col-4 my-auto">
				<p class="lead my-text-opacity">Build a creative resume that will show your potential and skills</p>
				<a class="btn my-btn-main" href="#">Use free templates</a>
			</div>
		</div>
	</div>
</div>

<div class="overlay my-bg-violet py-4">
	<div class="container text-right">
		<h3 class="my-text-opacity">How it works?</h3>
	</div>
</div>

<div class="overlay bg-light py-5">
	<div class="container">
		<div class="row">
			<div class="col-4">
				<div class="mx-auto mb-5">
					<div class="d-flex">
						<img class="m-auto text-primary" src="">
					</div>
					<p class="lead mb-0 text-center">Choose a resume template</p>
				</div>
			</div>
			<div class="col-4">
				<div class="mx-auto mb-5">
					<div class="d-flex">
						<img class="m-auto text-primary" src="">
					</div>
					<p class="lead mb-0 text-center">Fill in information about yourself</p>
				</div>
			</div>
			<div class="col-4">
				<div class="mx-auto mb-0">
					<div class="d-flex">
						<img class="m-auto text-primary" src="">
					</div>
					<p class="lead mb-0 text-center">Export your resume in PDF</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="overlay my-bg-violet text-white py-5">
</div>

<div class="overlay my-bg-footer text-white py-4">
	<div class="container text-center">
		<h3 class="my-5 my-text-opacity">Easy to use and done within minutes - try now!</h3>
		<a class="btn my-btn-secondary" href="#">Build your resume</a>
	</div>
</div>
</template>

<script>
export default {
    name: 'home'
}
</script>
        body {
	        background: #38324E;
    	}
		.my-bg-navbar {
			background-color: rgba(24, 22, 22, 0.66);
		}
		.my-bg-violet {
			background: #38324E;
		}
		.my-bg-pink {
			background: #DD3E4B;
		}
		.my-bg-footer {
			background: rgba(35, 32, 41, 0.94);
		}

		.my-btn-main {
			background-color: white !important;
			border-radius: 40px !important;
		}
		.my-btn-secondary {
			background-color: #C4C4C4 !important;
			border-radius: 40px !important;
		}

		.my-text-opacity {
			color: #FFFFFF;
			opacity: 0.7;
		}
<style>
</style>