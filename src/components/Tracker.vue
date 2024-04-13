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
import { api } from "@/utils/constants";
import axios from "axios";

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
  async created() {
    this.tasks = await this.getTasks();
  },
  methods: {
    async deleteTask(id: number) {
      await axios.delete(`${api}/tasks/${id}`);
      this.tasks = await this.getTasks();
    },
    async toggleReminder(id: number) {
      const task = await this.getTask(id);
      await axios.patch(`${api}/tasks/${id}`, {
        reminder: !task.reminder,
      });
      this.tasks = await this.getTasks();
    },
    async addTask(newTask: task) {
      await axios.post(`${api}/tasks`, newTask);
      this.tasks = await this.getTasks();
    },
    async getTasks() {
      return (await axios.get(`${api}/tasks`)).data;
    },
    async getTask(id: number) {
      return (await axios.get(`${api}/tasks/${id}`)).data;
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
