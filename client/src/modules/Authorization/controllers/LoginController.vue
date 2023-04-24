<template>
  <LoginView
    v-model:user="store.user"
    v-model:password="store.password"
    :errors="store.errors"
    :isErrorForm="store.isErrorForm"
    :submit="store.login"
    :resetForm="store.resetForm"
  />
</template>

<script setup lang="ts">
import LoginView from '../views/LoginView.vue';
import useLogin from '../stores/useLoginStore';

const store = useLogin();
</script>