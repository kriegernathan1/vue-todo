import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface User {
  uid: string;
  firstName: string;
  lastName: string;
}

export const useCounterStore = defineStore("user", () => {
  const user = ref<User>();

  async function login(username: string, password: string) {}

  function logout() {}

  async function isAuthenticated() {
    return !!user.value;
  }

  function $reset() {
    user.value = undefined;
  }

  return { user, login, logout, isAuthenticated };
});
