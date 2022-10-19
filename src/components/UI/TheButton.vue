<template>
  <div class="button">{{ title }}</div>
</template>

<script>
import { UIComponents } from "@/components/UI/names";

export default {
  name: UIComponents.button,
  props: {
    title: {
      requested: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
  background-color: tomato;
  padding: 10px;
}
</style>
