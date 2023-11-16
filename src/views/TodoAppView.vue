<script setup lang="ts">
import NavBar from "../components/NavBar/NavBar.vue";
import Todo from "../components/Todo/Todo.vue";
</script>

<template>
  <div class="container">
    <v-app>
      <NavBar />

      <div class="todo-view-container">
        <Todo />
      </div>
    </v-app>
  </div>
</template>

<style scoped>
.v-toolbar {
  position: static !important;
}

.todo-view-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
</style>
