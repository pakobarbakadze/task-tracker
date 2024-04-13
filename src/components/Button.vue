<template>
  <button @click="$emit('btn-click')" :style="{ background: color }">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "black",
    },
  },
});
</script>

<style scoped>
button {
  margin: auto 0px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
