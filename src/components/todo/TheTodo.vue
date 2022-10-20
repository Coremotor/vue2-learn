<template>
  <div class="todo">
    <span>Id: {{ activeTodo?.id || "" }}</span>
    <span>Name: {{ activeTodo?.name || "" }}</span>
    <span>Desc: {{ activeTodo?.desc || "" }}</span>
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
.todo {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
}
span:not(:last-child) {
  margin-bottom: 10px;
}
</style>
