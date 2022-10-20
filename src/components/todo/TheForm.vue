<template>
  <form class="form" @submit.prevent="onSubmit">
    <span>Name</span>
    <input v-model="name" class="input" name="name" type="text" />

    <span>Description</span>
    <textarea v-model="desc" class="textarea" name="desc" />

    <button class="button">Add</button>
  </form>
</template>

<script>
import { todoComponentsNames } from "@/components/todo/todoComponentsNames";
import { defineComponent } from "vue";

export default defineComponent({
  name: todoComponentsNames.form,
  data: () => ({
    name: "",
    desc: "",
  }),
  methods: {
    onSubmit() {
      if (!this.name || !this.desc) return;
      this.$emit("addTodo", {
        id: Date.now(),
        name: this.name,
        desc: this.desc,
        isDone: false,
      });
      this.name = "";
      this.desc = "";
    },
  },
});
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
