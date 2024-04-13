<template>
  <div class="tracker">
    <Header
      title="Task Tracker"
      :showAddTask="showAddTask"
      @show-add-task="toggleAddTask"
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
import { taskService } from "@/services/taskService";
import type { TaskType } from "@/types/task";

export default defineComponent({
  name: "Tracker",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [] as TaskType[],
      showAddTask: false,
    };
  },
  async created() {
    this.tasks = await taskService.getTasks();
  },
  methods: {
    async deleteTask(id: number) {
      await taskService.deleteTask(id);
      this.tasks = await taskService.getTasks();
    },
    async toggleReminder(id: number) {
      const task = await taskService.getTask(id);
      await taskService.updateTask(id, { reminder: !task?.reminder });
      this.tasks = await taskService.getTasks();
    },
    async addTask(newTask: TaskType) {
      await taskService.createTask(newTask);
      this.tasks = await taskService.getTasks();
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
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
