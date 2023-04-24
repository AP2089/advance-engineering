<template>
  <div class="entry-layout">
    <div class="entry-layout__wrap">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 15px;

  &__wrap {
    width: 100%;
    max-width: 344px;
    background-color: $color-service;
    padding: 30px 15px;
  }
}
</style>