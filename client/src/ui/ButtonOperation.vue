<template>
  <button
    class="button-operation"
    :class="{[`button-operation_${variant}`]: variant}"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

interface IProps {
  variant?: string;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.button-operation {
  min-width: 100px;
  padding: 4px 4px;
  background-color: $color-base;
  border: 1px solid $color-base;
  cursor: pointer;
  font-size: 10px;
  color: #ffffff;
  white-space: nowrap;
  transition: color .5s ease 0s, background-color .5s ease 0s;

  &:hover {
    color: $color-base;
    background-color: #ffffff;
  }

  &_danger {
    background-color: $color-danger;
    border-color: $color-danger;

    &:hover {
      color: $color-danger;
    }
  }
}
</style>