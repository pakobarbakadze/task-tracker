<template>
  <form @submit="onSubmit">
    <div class="form-control">
      <label for="task">Task</label>
      <input type="text" id="task" placeholder="Add Task" v-model="task" />
    </div>
    <div class="form-control">
      <label for="day">Day & Time</label>
      <input type="text" id="day" placeholder="Add Day & Time" v-model="day" />
    </div>
    <div class="form-control form-control-check">
      <label for="reminder">Set Reminder</label>
      <input type="checkbox" id="reminder" v-model="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddTask",
  data() {
    return {
      task: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault();

      if (!this.task) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 10000) + 1,
        text: this.task,
        day: this.day,
        reminder: this.reminder,
      };

      this.$emit("add-task", newTask);

      this.task = "";
      this.day = "";
      this.reminder = false;
    },
  },
});
</script>

<style scoped>
.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
}

.form-control-check input {
  width: auto;
  margin: 0;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
