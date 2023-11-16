<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

async function logout() {
  await userStore.logout();
  router.push("/login");
}
</script>

<template>
  <v-app-bar :elevation="11" title="Taskify">
    <v-app-bar-nav-icon @click="logout" icon="mdi-logout"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<style scoped>
.v-toolbar {
  position: absolute;
  top: 0;
  width: 100vw;
  left: 0;
  right: 0;
}
</style>
