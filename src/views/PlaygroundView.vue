<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true);

function updateShow() {
    show.value = !show.value;
}
</script>

<template>
    <div class="playground-container">
        <button @click="updateShow">Change display</button>
        <template v-if="show">
            <input placeholder="Some text 1">
        </template>
        <template v-else>
            <input placeholder="Some text 2">
        </template>
    </div>
</template>

<style scoped>
.playground-container {
    min-height: 100vh;
    min-width: 100vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>