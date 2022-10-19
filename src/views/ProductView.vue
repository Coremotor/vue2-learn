<template>
  <the-product :product="product" />
</template>

<script lang="ts">
import TheProduct from "@/components/products/TheProduct.vue";
import axios from "axios";
import { defineComponent } from "vue";
import type { Product } from "@/types";

export default defineComponent({
  components: { TheProduct },
  data: () => ({
    isLoading: false,
    product: {} as Product,
  }),
  mounted() {
    this.fetchProduct(this.$route.params.id);
  },
  methods: {
    async fetchProduct(productId: string) {
      this.isLoading = true;
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        this.product = response.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
</script>

<style scoped></style>
