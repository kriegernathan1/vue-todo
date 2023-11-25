<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import { ref, onMounted } from "vue";
import { Urls } from '../../constants/urls';

export interface TodoItem {
  name: string;
  isComplete: boolean;
  id: string;
}

interface TodoResponseItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

type TodoResponse = TodoResponseItem[]

const items = ref<TodoItem[]>([]);
const newTodoText = ref("");
const isLoading = ref(false);
const MAX_ITEMS_SHOWN = 20;

onMounted(async () => {
  try {
    isLoading.value = true;
    const todosResponse = await fetch(Urls.USER_TODOS);
    const todoItems = await todosResponse.json() as TodoResponse;

    handleTodoItems(todoItems);
  }
  catch (e) {
    console.log("error fetching todos", e)
  }
  finally {
    isLoading.value = false;
  }
})

function handleTodoItems(todoItems: TodoResponse) {
  let tempItems: TodoItem[] = [];
  todoItems.forEach((todo: TodoResponseItem) => {
    const newTodo: TodoItem = {
      name: todo.title,
      isComplete: todo.completed,
      id: (todo.id || '').toString(),
    }
    tempItems.push(newTodo);
  })
  tempItems = filterAndSortItems(tempItems);

  items.value = tempItems;
}

function filterAndSortItems(todoItems: TodoItem[]): TodoItem[] {
  const completedItems: TodoItem[] = [];
  const outstandingItems: TodoItem[] = [];

  todoItems.forEach((todo) => {
    let bucket = todo.isComplete ? completedItems : outstandingItems
    bucket.push(todo)
  })

  const sortedTodos = [...outstandingItems.slice(0, MAX_ITEMS_SHOWN / 2), ...completedItems.slice(0, MAX_ITEMS_SHOWN / 2)]

  if (sortedTodos.length < MAX_ITEMS_SHOWN) return sortedTodos

  return sortedTodos.slice(0, MAX_ITEMS_SHOWN);
}

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
      <v-text-field v-model="newTodoText" placeholder="Enter new Task" @keyup.enter="createTodo"></v-text-field>
    </div>

    <div class="progress-indicator" v-if="isLoading">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>

    <div class="todo-items-container" v-if="!isLoading">
      <div class="todo-list-container" v-for="task of items">
        <div class="todo-item">
          <TodoItem :task="task" @removeTask="removeTask" @markComplete="markComplete" />
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

.progress-indicator {
  align-self: center;
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
