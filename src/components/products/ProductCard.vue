<template>
  <router-link :to="{ path: '/products/' + product.id }" class="card">
    <img class="image" :src="product.thumbnail" alt="product" />
    <span class="title">{{ product.title }}</span>
    <div class="wrapper">
      <span class="price">{{ product.price }} уе</span>
      <the-button :title="'В корзину'" />
    </div>
  </router-link>
</template>

<script lang="ts">
import { components } from "@/components/names";
import TheButton from "@/components/UI/TheButton.vue";
import { defineComponent } from "vue";
import type { Product } from "@/types";

export default defineComponent({
  name: components.productCard,
  components: { TheButton },
  props: {
    product: {
      required: true,
      type: Object as () => Product,
    },
  },
});
</script>

<style scoped>
.card {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  background-color: deepskyblue;
  border: 1px solid darkblue;
  text-decoration: none;
  color: black;
  padding: 10px;
}
.image {
  height: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}
.title {
  font-weight: 600;
  margin-bottom: auto;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
