<template>
  <ul v-if="!isLoading" class="list">
    <product-card
      v-for="product in products"
      v-bind:key="product.id"
      v-bind:product="product"
    >
    </product-card>
  </ul>
  <span v-else>Loading...</span>
</template>

<script lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";
import { defineComponent } from "vue";
import type { Product } from "@/types";

export default defineComponent({
  components: { ProductCard },
  data: () => ({
    isLoading: false,
    products: [] as Product[],
  }),
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=20"
        );
        this.products = response.data.products;
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>

<style scoped>
.list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
