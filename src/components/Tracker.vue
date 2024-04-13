<template>
  <div class="tracker">
    <Header
      title="Task Tracker"
      :showAddTask
      @show-add-task="showAddTask = !showAddTask"
    />
    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
    />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask"></AddTask>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
import Tasks from "./Tasks.vue";
import AddTask from "./AddTask.vue";

import type { task } from "@/types/task";

export default defineComponent({
  name: "Tracker",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [] as task[],
      showAddTask: false,
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "May 5th at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "May 6th at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "May 7th at 12:30pm",
        reminder: false,
      },
    ];
  },
  methods: {
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id: number) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    addTask(newTask: task) {
      this.tasks = [...this.tasks, newTask];
    },
  },
  emits: ["add-task"],
});
</script>

<style scoped>
.tracker {
  width: 90vw;
  max-width: 600px;
  border: 1px solid black;
  margin: 20px auto;
  padding: 20px;
}
</style>
