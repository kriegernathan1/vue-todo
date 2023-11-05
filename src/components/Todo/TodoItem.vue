<script setup lang="ts">
import { type TodoItem } from "./Todo.vue"

defineProps<{ task: TodoItem }>();

</script>
    

<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col>
                {{ task.name }}
            </v-col>
            <v-col>
                {{ task.isComplete }}
            </v-col>
        </v-row>
    </v-container>
</template>


<style scoped></style>