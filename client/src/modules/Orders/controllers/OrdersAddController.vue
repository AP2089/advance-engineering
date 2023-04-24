<template>
  <OrdersAddView
    v-model:name="store.name"
    v-model:address="store.address"
    v-model:comment="store.comment"
    :errors="store.errors"
    :submit="store.submit"
    :resetForm="store.resetForm"
  />
</template>

<script setup lang="ts">
import OrdersAddView from '../views/OrdersAddView.vue';
import useOrdersAdd from '../stores/ordersAddStore';

const store = useOrdersAdd();
</script>