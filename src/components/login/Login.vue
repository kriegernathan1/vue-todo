
<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { reactive, ref } from 'vue';
import router from '../../router/index'

interface LoginForm {
    username: string
    password: string
}

const form = reactive<LoginForm>({
    username: '',
    password: ''
})

const valid = ref()

const userStore = useUserStore();

async function login(_: SubmitEvent) {
    if (!valid) return;

    const { username, password } = form;
    const loginAction = await userStore.login(username, password)

    if (loginAction.status === 'Success') {
        console.log("About to push")
        router.push('/app')
    }

}

</script>

<template>
    <v-form @submit.prevent="login" v-model="valid">
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field type="text" v-model="form.username" label="Username" required></v-text-field>
                    <v-text-field type="password" v-model="form.password" label="Password" required></v-text-field>
                    <v-btn type="submit">Submit</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<style scoped>
.v-container {
    width: 400px;
}

.v-btn {
    width: 100%;
}
</style>