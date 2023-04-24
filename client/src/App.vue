<template>
  <router-view />
  <Loader :isLoading="store.isLoading" />
</template>

<script lang="ts" setup>
import Loader from '@/ui/Loader.vue';
import useGeneral from '@/composables/useGeneralStore';

const store = useGeneral();
</script>