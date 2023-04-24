<template>
  <header class="header">
    <div class="header__center center">
      <div class="header__wrap">
        <HeaderNav />

        <HeaderControl
          :name="name"
          :logout="logout"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import HeaderNav from './HeaderNav.vue';
import HeaderControl from './HeaderControl.vue';

defineProps<{
  name: string | undefined;
  logout: () => void;
}>();
</script>

<style lang="scss" scoped>
.header {
  background-color: $color-base;
  margin-bottom: 30px;

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 52px;
  }
}
</style>