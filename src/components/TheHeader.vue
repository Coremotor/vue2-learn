<template>
  <header class="header">
    <div>LOGO</div>
    <the-navigation />
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
