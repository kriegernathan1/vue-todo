import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface User {
  uid: string;
  firstName: string;
  lastName: string;
}

interface LoginResponse {
  status: "Success" | "Failure";
  error?: any;
  user: User;
}

export const useUserStore = defineStore("user", () => {
  const user = ref<User>();

  async function login(
    username: string,
    password: string
  ): Promise<LoginResponse> {
    const userResponse = await fetch(
      "/mock-data/user/person-175c421a-6e9e-49cc-97cd-d0b679dbb4d5.json"
    );
    const userObject = await userResponse.json();
    user.value = userObject;

    return {
      status: "Success",
      user: userObject,
    };
  }

  function logout(): boolean {
    user.value = undefined;
    return true;
  }

  async function isAuthenticated() {
    return !!user.value;
  }

  function $reset() {
    user.value = undefined;
  }

  return { user, login, logout, isAuthenticated };
});
