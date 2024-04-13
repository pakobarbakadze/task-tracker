import type { TaskType } from "@/types/task";
import { api } from "@/utils/constants";
import axios from "axios";

export const taskService = {
  async getTasks(): Promise<TaskType[]> {
    try {
      const response = await axios.get(`${api}/tasks`);
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  },

  async getTask(id: number): Promise<TaskType | undefined> {
    try {
      const response = await axios.get(`${api}/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching task with ID ${id}:`, error);
    }
  },

  async createTask(newTask: TaskType): Promise<void> {
    try {
      await axios.post(`${api}/tasks`, newTask);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  },

  async updateTask(id: number, updatedTask: Partial<TaskType>): Promise<void> {
    try {
      await axios.patch(`${api}/tasks/${id}`, updatedTask);
    } catch (error) {
      console.error(`Error updating task with ID ${id}:`, error);
    }
  },

  async deleteTask(id: number): Promise<void> {
    try {
      await axios.delete(`${api}/tasks/${id}`);
    } catch (error) {
      console.error(`Error deleting task with ID ${id}:`, error);
    }
  },
};
