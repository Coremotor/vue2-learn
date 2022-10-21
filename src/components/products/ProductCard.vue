<template>
  <div class="card" @click.stop="goToProduct">
    <img class="image" :src="product.thumbnail" alt="product" />
    <span class="title">{{ product.title }}</span>
    <div class="wrapper">
      <span class="price">{{ product.price }} уе</span>
      <the-button :title="'В корзину'" @onButtonClick="onButtonClick" />
    </div>
  </div>
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
  methods: {
    onButtonClick() {
      this.$store.dispatch("products/addInCart", this.product);
    },
    goToProduct() {
      this.$router.push(`/products/${this.product.id}`);
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
  cursor: pointer;
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
