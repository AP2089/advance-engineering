<template>
  <div class="wrap">
    <Header
      :name="generalStore?.user?.name"
      :logout="loginStore.logout"
    />

    <div class="middle">
      <div class="center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header';
import useGeneralStore from '@/composables/useGeneralStore';
import { useLoginStore } from '@/modules/Authorization';

const generalStore = useGeneralStore();
const loginStore = useLoginStore();
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.middle {
  flex: 1 0 auto;
}
</style>