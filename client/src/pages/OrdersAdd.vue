<template>
  <BaseLayout>
    <h1 class="heading-base">{{ $t('add.order') }}</h1>

    <OrdersAdd />
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import { OrdersAdd } from '@/modules/Orders';
</script>