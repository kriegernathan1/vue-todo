import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("user", () => {
  const user = ref({});

  async function login(username: string, password: string) {}

  function logout() {}

  return { user, login, logout };
});
