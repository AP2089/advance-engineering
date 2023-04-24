<template>
  <Transition name="loader">
    <div
      class="modal"
      v-if="isShow"
    >
      <div class="modal__wrap">
        <div class="modal__content">
          <slot></slot>
        </div>

        <div
          class="modal__foot"
          v-if="slots.foot"
        >
          <slot name="foot"></slot>
        </div>
      </div>

      <div
        class="modal__backdrop"
        @click="hide"
      ></div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';

withDefaults(defineProps<{
  isShow: boolean;
  hide?: () => void;
}>(), {
  isShow: false,
  hide: () => {}
});

const slots = useSlots();
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  padding: 40px 15px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &__wrap {
    max-width: 400px;
    margin: 0 auto;
    background-color: $color-service;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 30px 15px;
    position: relative;
    z-index: 1;
  }

  &__foot {
    padding-top: 20px;
  }

  &__foot :deep(.button-base) {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }
}

.loader-enter-active,
.loader-leave-active {
  opacity: 1;
  transition: opacity .5s ease 0s;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
</style>