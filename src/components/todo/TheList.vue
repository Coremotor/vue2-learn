<template>
  <ul class="list">
    <the-list-item
      v-for="todo in list"
      :key="todo.id"
      :todo="todo"
      :isActive="isActive(todo.id)"
      @setActiveTodo="setActiveTodo(todo)"
      @deleteTodo="deleteTodo(todo.id)"
      @changeTodo="changeTodo"
    />
  </ul>
</template>

<script lang="ts">
import { todoComponentsNames } from "@/components/todo/todoComponentsNames";
import TheListItem from "@/components/todo/TheListItem.vue";
import { defineComponent } from "vue";

import type { Todo } from "@/types";

export default defineComponent({
  name: todoComponentsNames.list,
  components: {
    TheListItem,
  },
  props: {
    list: {
      requested: true,
      type: Array as () => Todo[],
    },
    activeTodo: {
      default: null,
      type: Object as () => Todo | null,
    },
  },
  methods: {
    setActiveTodo(todo: Todo) {
      this.$emit("setActiveTodo", todo);
    },
    isActive(todoId: number) {
      return this.activeTodo?.id === todoId;
    },
    deleteTodo(id: number) {
      this.$emit("deleteTodo", id);
    },
    changeTodo(id: number, checked: boolean) {
      this.$emit("changeTodo", id, checked);
    },
  },
});
</script>

<style scoped>
.list {
  width: 30%;
  margin-right: 20px;
}
</style>
