<template>
  <div class="message-base">{{ text }}</div>
</template>

<script setup lang="ts">
interface IProps {
  text: string;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.message-base {
  font-size: 14px;
  color: $color-danger;
  margin-bottom: 15px;
}
</style>