<template>
  <button class="button-base">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button-base {
  min-width: 100px;
  padding: 8px 15px;
  background-color: #ffffff;
  border: 1px solid $color-global;
  cursor: pointer;
  color: $color-global;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
}
</style>