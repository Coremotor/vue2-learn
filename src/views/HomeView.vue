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
import ProductCard from "@/components/products/ProductCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { ProductCard },
  computed: {
    products() {
      return this.$store.getters["products/getProducts"];
    },
    isLoading() {
      return this.$store.getters["products/getIsLoading"];
    },
  },
  mounted() {
    this.$store.dispatch("products/fetchProducts");
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
