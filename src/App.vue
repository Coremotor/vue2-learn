<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: { TheHeader, TheFooter },
};
</script>

<template>
  <div class="container">
    <the-header />
    <main class="main">
      <router-view />
    </main>
    <the-footer />
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  min-width: 360px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
}
.main {
  flex: 1 1 auto;
  padding: 20px;
}
</style>
