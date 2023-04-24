<template>
  <nav class="header__nav">
    <ul class="header__nav-list">
      <HeaderNavItem
        v-for="item in navItems"
        :key="item.id"
        :name="item.name"
        :url="item.url"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useI18n } from '@/plugins/i18n';
import HeaderNavItem from './HeaderNavItem.vue';

const { t } = useI18n();

const navItems = [
  { id: 1, name: t('all.orders'), url: '/' },
  { id: 2, name: t('add.order'), url: '/order' }
];
</script>

<style lang="scss" scoped>
.header {
  &__nav {
    margin-right: 15px;
  }

  &__nav-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
</style>