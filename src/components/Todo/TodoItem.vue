<script setup lang="ts">
import { toRef } from "vue";
import { type TodoItem } from "./Todo.vue";

const { task } = defineProps<{ task: TodoItem }>();
const emits = defineEmits<{
  markComplete: [id: string, value: boolean];
  removeTask: [id: string];
}>();
const isComplete = toRef(task.isComplete);
</script>

<template>
  <v-checkbox
    :id="task.id"
    :center-affix="true"
    :class="{ strikeOut: isComplete }"
    append-icon="mdi-delete"
    @update:model-value="emits('markComplete', task.id, isComplete)"
    @click:append="emits('removeTask', task.id)"
    v-model="isComplete"
    :label="task.name"
  >
  </v-checkbox>
</template>

<style scoped>
.strikeOut :deep(label) {
  text-decoration: line-through;
}
</style>
