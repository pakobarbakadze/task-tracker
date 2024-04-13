<template>
  <div
    :class="[task.reminder ? 'reminder' : '', 'task']"
    @dblclick="$emit('toggle-reminder', task.id)"
  >
    <h3>
      {{ task.text }}
      <i class="fas fa-times" @click="$emit('delete-task', task.id)"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { TaskType } from "@/types/task";

export default defineComponent({
  name: "Task",
  props: {
    task: {
      type: Object as () => TaskType,
      required: true,
    },
  },
});
</script>

<style scoped>
.task {
  background-color: #f4f4f4;
  margin: 15px 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task h3 {
  display: flex;
  justify-content: space-between;
}

.fas {
  color: red;
  cursor: pointer;
}

.reminder {
  border-left: 5px solid green;
}
</style>
