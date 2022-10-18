<template>
  <nav class="nav">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About</router-link>
  </nav>
</template>

<script>
import { components } from "@/components/names";

export default {
  name: components.nav,
};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
}
.link:not(:last-child) {
  margin-right: 10px;
}
</style>
