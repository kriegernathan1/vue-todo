<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar/NavBar.vue";
import { useUserStore } from "./stores/user";

const isLoggedIn = useUserStore().isLoggedIn;
</script>

<template>
  <NavBar v-if="isLoggedIn" />
  <RouterView />
</template>

<style scoped></style>
