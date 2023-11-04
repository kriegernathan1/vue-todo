<script setup lang="ts">
import NavBar from '../components/NavBar/NavBar.vue';
import { useUserStore } from '@/stores/user';


const userStore = useUserStore();
const { user } = userStore;
</script>

<template>
    <NavBar />
</template>

<style scoped></style>
