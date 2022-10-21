<template>
  <the-cart :productsInCart="productsInCart"/>
</template>

<script>
import TheCart from "@/components/products/TheCart.vue";
export default {
  components: {
    TheCart,
  },
  computed: {
    productsInCart() {
      return this.$store.getters["products/getCart"];
    },
  },
};
</script>

<style scoped></style>
