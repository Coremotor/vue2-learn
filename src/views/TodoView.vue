<template>
  <div class="container">
    <the-list
      :list="todos"
      :activeTodo="activeTodo"
      @setActiveTodo="setActiveTodo"
      @deleteTodo="deleteTodo"
      @changeTodo="changeTodo"
    />
    <div class="wrapper">
      <the-form @addTodo="addTodo" />
      <the-todo v-show="activeTodo" :activeTodo="activeTodo" />
    </div>
  </div>
</template>

<script lang="ts">
import TheForm from "@/components/todo/TheForm.vue";
import TheList from "@/components/todo/TheList.vue";
import TheTodo from "@/components/todo/TheTodo.vue";
import { defineComponent } from "vue";

import type { Todo } from "@/types";

export default defineComponent({
  components: {
    TheForm,
    TheList,
    TheTodo,
  },
  data: () => ({
    todos: [
      { id: 1, name: "todo1", desc: "desc1", isDone: false },
      { id: 2, name: "todo2", desc: "desc2", isDone: true },
      { id: 3, name: "todo3", desc: "desc3", isDone: false },
    ] as Todo[],
    activeTodo: null as Todo | null,
  }),
  methods: {
    setActiveTodo(todo: Todo) {
      this.activeTodo = todo;
    },
    addTodo(todo: Todo) {
      this.todos.push(todo);
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      if (id === this.activeTodo?.id) {
        this.activeTodo = null;
      }
    },
    changeTodo(id: number, checked: boolean) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: checked,
          };
        }
        return todo;
      });
    },
  },
});
</script>

<style scoped>
.container {
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.wrapper {
  width: 40%;
}
</style>
