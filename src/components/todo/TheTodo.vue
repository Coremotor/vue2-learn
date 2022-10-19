<template>
  <div class="container">
    <span>{{ activeTodo?.name || "" }}</span>
  </div>
</template>

<script lang="ts">
import { todoComponentsNames } from "@/components/todo/todoComponentsNames";
import { defineComponent } from "vue";
import type { Todo } from "@/types";

export default defineComponent({
  name: todoComponentsNames.todo,
  props: {
    activeTodo: {
      default: null,
      type: Object as () => Todo | null,
    },
  },
});
</script>

<style scoped>
.container {
  border: 1px solid black;
  padding: 10px;
}
</style>
