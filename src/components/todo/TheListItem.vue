<template>
  <li class="item" @click="onClick" :class="{ active: isActive }">
    <input class="checkbox" type="checkbox" :checked="todo.isDone" />
    <span class="name">{{ todo.name }}</span>
    <button class="button">Delete</button>
  </li>
</template>

<script lang="ts">
import { todoComponentsNames } from "@/components/todo/todoComponentsNames";
import { defineComponent } from "vue";
import type { Todo } from "@/types";

export default defineComponent({
  name: todoComponentsNames.listItem,
  props: {
    todo: {
      required: true,
      type: Object as () => Todo,
    },
    isActive: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    onClick() {
      this.$emit("setActiveTodo");
    },
  },
});
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
}
.item:not(:last-child) {
  margin-bottom: 5px;
}
.name {
  margin-right: auto;
}
.checkbox {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.button {
  padding: 5px;
}
.active {
  background-color: tomato;
}
</style>
