<template>
  <div class="tracker_header">
    <h1>{{ title }}</h1>
    <Button text="Add" color="green" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    Button,
  },
});
</script>

<style scoped>
.tracker_header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.tracker_header h1 {
  font-size: 32px;
}
</style>
