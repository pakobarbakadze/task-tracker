<template>
  <button @click="onClick()" :style="{ background: color }">{{ text }}</button>
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
  methods: {
    onClick() {
      console.log("Button clicked");
    },
  },
});
</script>

<style scoped>
button {
  width: 50px;
  height: 25px;
  margin: auto 0px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
