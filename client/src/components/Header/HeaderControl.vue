<template>
  <div class="header__control">
    <div class="header__control-name">{{ name }}</div>

    <ButtonBase
      class="header__control-btn-exit"
      @click="logout()"
    >
      {{ $t('exit') }}
    </ButtonBase>
  </div>
</template>

<script lang="ts" setup>
import ButtonBase from '@/ui/ButtonBase.vue';

defineProps<{
  name: string | undefined;
  logout: () => void;
}>();
</script>

<style lang="scss" scoped>
.header {
  &__control {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 15px;
  }

  &__control-name {
    font-size: 12px;
    margin-right: 25px;
  }
}
</style>