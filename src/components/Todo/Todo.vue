<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import { ref } from "vue";

export interface TodoItem {
  name: string;
  isComplete: boolean;
  id: string;
}

const items = ref<TodoItem[]>([
  {
    name: "Clean Kitched",
    isComplete: false,
    id: "1",
  },
  {
    name: "Clean Kitched",
    isComplete: false,
    id: "2",
  },
  {
    name: "Clean Kitched",
    isComplete: false,
    id: "3",
  },
  {
    name: "Clean Kitched",
    isComplete: false,
    id: "4",
  },
]);

const newTodoText = ref("");

function createTodo() {
  items.value.unshift({
    id: (Math.random() * 1000).toString(),
    name: newTodoText.value,
    isComplete: false,
  });
  newTodoText.value = "";
}

function removeTask(id: string) {
  items.value = items.value.filter((task) => task.id !== id);
}

function markComplete(id: string, isComplete: boolean) {
  for (let i = 0; i < items.value.length; i++) {
    const value = items.value[i];
    if (value.id === id) {
      value.isComplete = isComplete;
      break;
    }
  }
}
</script>

<template>
  <div class="todo-container">
    <div class="todo-create-container">
      <v-text-field
        v-model="newTodoText"
        @keyup.enter="createTodo"
      ></v-text-field>
    </div>

    <div class="todo-items-container">
      <div class="todo-list-container" v-for="task of items">
        <div class="todo-item">
          <TodoItem
            :task="task"
            @removeTask="removeTask"
            @markComplete="markComplete"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  display: flex;
  flex-direction: column;
  width: 500px;
}

.todo-items-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.todo-item {
  width: 100%;
  background-color: #212121;
}
</style>
