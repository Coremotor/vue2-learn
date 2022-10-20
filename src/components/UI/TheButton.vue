<template>
  <div @click.stop="onClick" class="button">{{ title }}</div>
</template>

<script>
import { UIComponents } from "@/components/UI/names";
import { defineComponent } from "vue";

export default defineComponent({
  name: UIComponents.button,
  props: {
    title: {
      requested: true,
      type: String,
    },
  },
  methods: {
    onClick() {
      this.$emit("onButtonClick");
    },
  },
});
</script>

<style scoped>
.button {
  cursor: pointer;
  background-color: tomato;
  padding: 10px;
}
</style>
