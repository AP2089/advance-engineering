<template>
  <OrdersListView
    :headers="store.headers"
    :items="store.items"
    :user="store.user"
    :getItems="store.getItems"
    :removeItem="store.removeItem"
    :changeStatusItem="store.changeStatusItem"
  />
</template>

<script setup lang="ts">
import OrdersListView from '../views/OrdersListView.vue';
import useOrdersList from '../stores/ordersListStore';

const store = useOrdersList();
</script>