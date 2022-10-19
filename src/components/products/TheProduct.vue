<template>
  <div class="wrapper">
    <h2 class="title">Title: {{ product.title }}</h2>
    <div class="inner">
      <carousel :perPage="1" class="carousel">
        <slide :key="image" v-for="image in product.images">
          <img class="image" :src="image" :alt="image" />
        </slide>
      </carousel>
      <div class="description">
        <ul>
          <li class="list-item">Price: {{ product.price }} ye</li>
          <li class="list-item">Brand: {{ product.brand }}</li>
          <li class="list-item">Category: {{ product.category }}</li>
          <li class="list-item">Description: {{ product.description }}</li>
          <li class="list-item">Rating: {{ product.rating }}</li>
        </ul>
      </div>
    </div>
    <the-button :title="'В корзину'" class="button" />

    <div class="go-back" @click="goBack">go back</div>
  </div>
</template>

<script lang="ts">
import { components } from "@/components/names";
import { defineComponent } from "vue";
import type { Product } from "@/types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore:next-line
import { Carousel, Slide } from "vue-carousel";

import TheButton from "@/components/UI/TheButton.vue";

export default defineComponent({
  name: components.product,
  components: {
    Carousel,
    Slide,
    TheButton,
  },
  props: {
    product: {
      required: true,
      type: Object as () => Product,
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.title {
  margin-bottom: 20px;
}
.image {
  width: 100%;
}
.carousel {
  width: 300px;
  height: 300px;
  min-width: 300px;
  min-height: 300px;
}
.inner {
  display: flex;
}
.description {
  margin-left: 40px;
}
.button {
  margin-top: 40px;
}
.go-back {
  text-decoration: underline;
  cursor: pointer;
  margin-top: 60px;
}
</style>
