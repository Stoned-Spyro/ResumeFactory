<template>
<body>
  <section class="hero is-medium my-bg-violet">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1 has-text-white">TAKE THE FIRST STEP TO OWN SUCCESS</h1>
        <router-link to='/AddInfo' class="button my-btn-main">Create your resume</router-link>
      </div>
    </div>
  </section>
  <section class="section my-bg-pink">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths">
          <section>
            <b-carousel-list
              v-model="values"
              icon-pack="fa"
              :data="items"
              :arrow="arrow"
              icon-size="is-small"
              :items-to-list="perList"
              :repeat="repeat"
              :has-drag="drag"
              :has-grayscale="gray"
              :has-opacity="opacity"
            />
          </section>
        </div>
        <div class="column has-text-centered">
          <p
            class="my-text-opacity"
          >Build a creative resume that will show your potential and skills</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section my-bg-violet">
    <div class="container has-text-centered	">
      <h3 class="title is-3 my-text-opacity">How it works?</h3>
    </div>
  </section>

  <div class="columns is-centered">
    <div class="column ">
      <div class="card ">
        <div class="card-image is-flex is-horizontal-center">
          <figure class="image is-128x128">
            <img src="./images/documents.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content is-flex is-horizontal-center">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-white">Choose a resume template</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column level">
      <div class="card">
        <div class="card-image is-flex is-horizontal-center">
          <figure class="image is-128x128">
            <img src="./images/notes.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content is-flex is-horizontal-center">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-white">Fill in information about yourself</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column level-center">
      <div class="card">
        <div class="card-image is-flex is-horizontal-center">
          <figure class="image is-128x128">
            <img src="./images/png.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content is-flex is-horizontal-center">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-white">Export your resume in PDF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <figure class="image is-128x128">
            <img src="../images/documents.png" />
            <p>Choose a resume template</p>
          </figure>
        </div>
        <div class="column has-text-centered">
          <figure class="image is-128x128">
            <img src="../images/notes.png" />
            <p>Fill in information about yourself</p>
          </figure>
        </div>
        <div class="column has-text-centered">
          <figure class="image is-128x128">
            <img src="../images/png.png" />
            <p>Export your resume in PDF</p>
          </figure>
        </div>
      </div>
  </div>-->

  <section class="section my-bg-violet"></section>

  <section class="section my-bg-footer">
    <div class="container has-text-centered">
      <h3 class="title is-3 my-text-opacity">Easy to use and done within minutes - try now!</h3>
      <router-link to='/AddInfo' class="button my-btn-secondary">Build your resume</router-link>
      <p class="my-text-opacity">2020 ResumeFactory</p>
    </div>
  </section>
</body>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      arrow: true,
      arrowHover: true,
      drag: true,
      gray: false,
      opacity: false,
      values: 1,
      perList: 2,
      repeat: true,
      items: [
        {
          title: "Slide 1",
          image: "https://picsum.photos/id/0/1230/500"
        },
        {
          title: "Slide 2",
          image: "https://picsum.photos/id/1/1230/500"
        },
        {
          title: "Slide 3",
          image: "https://picsum.photos/id/2/1230/500"
        },
        {
          title: "Slide 4",
          image: "https://picsum.photos/id/3/1230/500"
        },
        {
          title: "Slide 5",
          image: "https://picsum.photos/id/4/1230/500"
        },
        {
          title: "Slide 6",
          image: "https://picsum.photos/id/5/1230/500"
        },
        {
          title: "Slide 7",
          image: "https://picsum.photos/id/6/1230/500"
        },
        {
          title: "Slide 8",
          image: "https://picsum.photos/id/7/1230/500"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.my-bg-violet {
  background: #38324e;
}
.my-bg-pink {
  background: #dd3e4b;
}
.my-bg-footer {
  background: rgba(35, 32, 41, 0.94);
}

.my-btn-main {
  background-color: white !important;
  border-radius: 40px !important;
}
.my-btn-secondary {
  background-color: #c4c4c4 !important;
  border-radius: 40px !important;
}

.my-text-opacity {
  color: #ffffff;
  opacity: 0.7;
}
.is-horizontal-center {
  justify-content: center;
}
</style>