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
        <div class="todo-create-container">
            <v-text-field></v-text-field>
        </div>

        <div class="todo-items-container">
            <div class="todo-list-container" v-for="task of items">
                <div class="todo-item">
                    <TodoItem :task="task" />
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