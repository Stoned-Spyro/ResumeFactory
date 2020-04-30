<template>
	<body>
		<section class="hero is-medium my-bg-violet">
			<div class="hero-body">
				<div class="container has-text-centered">
					<h1 class="title is-1 has-text-white">TAKE THE FIRST STEP TO OWN SUCCESS</h1>
					<button class="button my-btn-main">Create your resume</button>
				</div>
			</div>
		</section>

		<section class="section my-bg-pink">
			<div class="container">
				<div class="columns">
					<div class="column is-three-fifths">
						<b-carousel
							:arrow="arrow"
							:arrow-both="arrowBoth"
							:arrow-hover="arrowHover"
							:icon-pack="iconPack"
							:icon-prev="iconPrev"
							:icon-next="iconNext"
							:icon-size="iconSize">
							<b-carousel-item v-for="(carousel, i) in carousels" :key="i">
								<section :class="`hero is-medium is-${carousel.color}`">
									<div class="hero-body has-text-centered">
										<h1 class="title">{{carousel.title}}</h1>
									</div>
								</section>
							</b-carousel-item>
						</b-carousel>
					</div>
					<div class="column has-text-centered">
						<p class="my-text-opacity">Build a creative resume that will show your potential and skills</p>
						<button class="button my-btn-main">Use free templates</button>
					</div>
				</div>
			</div>
		</section>

		<section class="section my-bg-violet">
			<div class="container has-text-right">
				<h3 class="title is-3 my-text-opacity">How it works?</h3>
			</div>
		</section>

		<section class="section is-medium my-bg-light">
			<div class="container">
				<div class="columns">
					<div class="column has-text-centered">		
						<figure class="image is-128x128">
							<img src="https://bulma.io/images/placeholders/128x128.png">
						</figure>	
						<p>Choose a resume template</p>
					</div>
					<div class="column has-text-centered">
						<figure class="image is-128x128">
							<img src="https://bulma.io/images/placeholders/128x128.png">
						</figure>
						<p>Fill in information about yourself</p>
					</div>
					<div class="column has-text-centered">
						<figure class="image is-128x128">
							<img src="https://bulma.io/images/placeholders/128x128.png">
						</figure>
						<p>Export your resume in PDF</p>
					</div>
				</div>
			</div>
		</section>

		<section class="section my-bg-violet">
		</section>

		<section class="section my-bg-footer">
			<div class="container has-text-centered">
				<h3 class="title is-3 my-text-opacity">Easy to use and done within minutes - try now!</h3>
				<button class="button my-btn-secondary">Build your resume</button>
				<p class="my-text-opacity">2020 ResumeFactory</p>
			</div>
		</section>
	</body>
</template>

<script>
export default {
	name: 'home',
	data() {
        return {
            arrow: true,
            arrowBoth: false,
            arrowHover: false,
            iconPack: 'mdi',
            iconPrev: 'arrow-left',
            iconNext: 'arrow-right',
            iconSize: '',
            carousels: [
                {  color: '00ff00' },
                { color: 'ff0000' },
                { tcolor: '0000ff' }
            ]
        }
    }
}
</script>
<style>
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
</style>