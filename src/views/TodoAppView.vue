<script setup lang="ts">
import NavBar from '../components/NavBar/NavBar.vue';
import Todo from "../components/Todo/Todo.vue";
</script>

<template>
    <div class="container">
        <v-app>
            <NavBar />
            <Todo />
        </v-app>
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    display: flex;
    justify-content: center;
}
</style>
