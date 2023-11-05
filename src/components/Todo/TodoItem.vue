<script setup lang="ts">
import { toRef } from "vue";
import { type TodoItem } from "./Todo.vue"

const { task } = defineProps<{ task: TodoItem }>();

const isComplete = toRef(task.isComplete)
</script>
    

<template>
    <v-checkbox :class="{ strikeOut: isComplete }" v-model="isComplete" :label="task.name"></v-checkbox>
</template>


<style scoped>
.strikeOut :deep(label) {
    text-decoration: line-through;
}
</style>