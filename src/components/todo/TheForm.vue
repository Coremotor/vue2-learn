<template>
  <form class="form" @submit.prevent="onSubmit">
    <span>Name</span>
    <input class="input" name="name" type="text" />

    <span>Description</span>
    <textarea class="textarea" name="desc" />

    <button class="button">Add</button>
  </form>
</template>

<script>
import { todoComponentsNames } from "@/components/todo/todoComponentsNames";

export default {
  name: todoComponentsNames.form,
  methods: {
    onSubmit() {
      console.log("submit");
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 20px;
}
.input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}
.textarea {
  height: 100px;
  width: 100%;
  resize: none;
  padding: 5px;
  margin-bottom: 10px;
}
.button {
  align-self: center;
  padding: 5px 20px;
}
</style>
