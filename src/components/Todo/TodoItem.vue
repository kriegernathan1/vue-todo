<script setup lang="ts">
import { toRef } from "vue";
import { type TodoItem } from "./Todo.vue"

const { task } = defineProps<{ task: TodoItem }>();

const isComplete = toRef(task.isComplete)
</script>
    

<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-checkbox :class="{ strikeOut: isComplete }" v-model="isComplete" :label="task.name"></v-checkbox>
        </v-row>
    </v-container>
</template>


<style scoped>
.strikeOut {
    text-decoration: line-through;
}
</style>