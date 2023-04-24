<template>
  <Transition name="loader">
    <div
      class="loader"
      v-if="isLoading"
    ></div>
  </Transition>
</template>

<script lang="ts" setup>
const { isLoading } = defineProps<{
  isLoading: boolean;
}>();
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  &:after {
    content: '';
    width: 44px;
    height: 44px;
    background-color: $color-global;
    box-shadow: 0 0 1px 0 rgba(0,0,0,0.75);
    border-radius: 5px;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 0;
  }

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #ffffff;
    border-right-color: $color-base;
    animation: loader 1s infinite linear;
    position: absolute;
    top: 32px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }
}

@keyframes loader {
  to {
    transform: rotate(1turn);
  }
}

.loader-enter-active,
.loader-leave-active {
  transform: translateY(0);
  transition: transform .5s ease 0s;
}

.loader-enter-from,
.loader-leave-to {
  transform: translateY(-100px);
}
</style>