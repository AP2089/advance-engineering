<template>
  <li class="header__nav-item">
    <RouterLink
      :to="url"
      class="header__nav-link"
    >
      {{ name }}
    </RouterLink>
  </li>
</template>

<script lang="ts" setup>
import { RouterLink } from '@/router';

defineProps<{
  url: string;
  name: string;
}>();
</script>

<style lang="scss" scoped>
.header {
  &__nav-item {
    margin-right: 38px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__nav-link {
    color: #ffffff;
    text-decoration: none;
    opacity: 1;
    transition: opacity .5s ease 0s;

    &:hover,
    &.active {
      opacity: .5;
    }
  }
}
</style>