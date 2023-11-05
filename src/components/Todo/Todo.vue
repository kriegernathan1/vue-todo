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
    <div class="container">
        <v-container>
            <v-row align="center">
                <v-text-field></v-text-field>
            </v-row>
            <v-row v-for="task of items" align="center">
                <TodoItem :task="task" />
            </v-row>
        </v-container>
    </div>
</template>


<style scoped>
.container {
    margin-top: 150px;
}
</style>