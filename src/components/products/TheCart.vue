<template>
  <div v-if="productsInCart.length === 0">Cart is empty</div>
  <div v-else class="wrapper">
    <ul class="list">
      <li :key="p.id" v-for="p in productsInCart" class="list-item">
        <img class="image" :src="p.thumbnail" alt="" srcset="" />
        <span>{{ p.title }}</span>
        <span class="price">{{ p.price }} ye</span>
        <button class="remove" @click="removeFromList(p)">Remove</button>
      </li>
    </ul>
    <div class="order">
      <h4 class="title">Оформить заказ</h4>
      <span class="text">Количество товаров: {{ productsInCart.length }}</span>
      <span class="text">Общая сумма: {{ allPrice }} ye</span>
      <the-button
        :title="'Оформить'"
        class="button"
        @onButtonClick="createOrder"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { components } from "@/components/names";
import { defineComponent } from "vue";
import type { Product } from "@/types";
import TheButton from "@/components/UI/TheButton.vue";

export default defineComponent({
  name: components.cart,
  components: {
    TheButton,
  },
  props: {
    productsInCart: {
      required: true,
      type: Array as () => Product[],
    },
  },
  methods: {
    createOrder() {
      console.log("create");
    },
    removeFromList(p: Product) {
      this.$store.dispatch("products/removeFromCart", p)
    }
  },
  computed: {
    allPrice() {
      return this.productsInCart.reduce(
        (prev, current) => prev + current.price,
        0
      );
    },
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
}
.list {
  width: 70%;
  list-style: none;
  margin-right: auto;
}
.list-item {
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
}
.list-item:not(:last-child) {
  margin-bottom: 5px;
}
.image {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.price {
  margin-left: auto;
}
.remove {
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 20px;
}
.order {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border: 1px solid black;
  padding: 10px;
}
.title {
  margin-bottom: 20px;
}
.text {
  margin-bottom: 10px;
}
.button {
  text-align: center;
}
</style>
