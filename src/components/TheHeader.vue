<template>
  <header class="header">
    <div>LOGO</div>
    <the-navigation />
    <router-link to="/cart/" class="cart">Cart {{ cart.length }}</router-link>
  </header>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import { components } from "@/components/names";
export default {
  name: components.header,
  components: {
    TheNavigation,
  },
  computed: {
    cart() {
      return this.$store.getters["products/getCart"];
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
}
</style>
