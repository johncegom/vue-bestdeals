<template>
  <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselIndicators" data-slide-to="1"></li>
      <li data-target="#carouselIndicators" data-slide-to="2"></li>
      <li data-target="#carouselIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <router-link :to="{name: 'ShowcaseDetails', params: {brand: showcases[1][5].brand, title: showcases[1][5].title, showcase: showcases[1][5], showcases}}" class="carousel-item active">
        <img
          class="d-block w-100"
          :src="showcases[1][5].img"
          alt="900x500"
          data-holder-rendered="true"
        >
      </router-link>
      <router-link :to="{name: 'ShowcaseDetails', params: {brand: showcases[1][n].brand, title: showcases[1][n].title, showcase: showcases[1][n], showcases}}" class="carousel-item" v-for="n in 3" :key="showcases[1][n].title">
        <img
          class="d-block w-100"
          :src="showcases[1][n].img"
          alt="900x500"
          data-holder-rendered="true"
        >
      </router-link>
      <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span aria-hidden="true"><i class="fas fa-chevron-left fa-7x icon-red" aria-hidden="true"></i></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span aria-hidden="true"><i class="fas fa-chevron-right fa-7x icon-red"></i></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "Carousel",
  props: {
    showcases: { type: Array}
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.carousel-indicators li {
  background-color: red;
}

.icon-red {
  color: red;
}
</style>

