<template>
  <div class="tracker">
    <Header title="Task Tracker" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";

type task = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

export default defineComponent({
  name: "Tracker",
  components: {
    Header,
  },
  data() {
    return {
      tasks: [] as task[],
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
});
</script>

<style scoped>
.tracker {
  width: 90vw;
  border: 1px solid black;
  margin: 20px auto;
  padding: 20px 5px;
}
</style>
