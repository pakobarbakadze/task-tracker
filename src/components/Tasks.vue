<template>
  <div :key="task.id" v-for="task in tasks">
    <Task
      :task="task"
      @delete-task="$emit('delete-task', task.id)"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
    ></Task>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { task } from "@/types/task";
import Task from "./Task.vue";

export default defineComponent({
  name: "Tasks",
  props: {
    tasks: {
      type: Array as () => task[],
      required: true,
    },
  },
  components: { Task },
  emits: ["delete-task", "toggle-reminder"],
});
</script>

<style scoped></style>
