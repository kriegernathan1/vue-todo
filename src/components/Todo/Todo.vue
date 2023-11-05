<script setup lang="ts">
import TodoItem from './TodoItem.vue';

export interface TodoItem {
    name: string
    isComplete: boolean,
}

const items: TodoItem[] = [
    {
        name: "Clean Kitched",
        isComplete: false,
    },
    {
        name: "Clean Kitched",
        isComplete: false,
    },
    {
        name: "Clean Kitched",
        isComplete: false,
    },
    {
        name: "Clean Kitched",
        isComplete: false,
    },
    {
        name: "Clean Kitched",
        isComplete: false,
    },
    {
        name: "Clean Kitched",
        isComplete: false,
    },
]


</script>


<template>
    <div class="todo-container">
        <v-container>
            <v-row>
                <v-text-field></v-text-field>
            </v-row>
            <v-row v-for="task of items">
                <v-card width="600">
                    <TodoItem :task="task" />
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>


<style scoped>
.todo-container {
    min-width: 400px;
    max-width: 600px;
}
</style>