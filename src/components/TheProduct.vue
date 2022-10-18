<template>
  <div>Product id: {{ product.title }}</div>
</template>

<script lang="ts">
import { components } from "@/components/names";
import { defineComponent } from "vue";
import type { Product } from "@/types";

export default defineComponent({
  name: components.product,
  props: {
    product: {
      required: true,
      type: Object as () => Product,
    },
  },
});
</script>

<style scoped></style>
