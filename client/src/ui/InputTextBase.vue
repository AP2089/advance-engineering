<template>
  <input
    type="text"
    class="input-text-base"
    :value="value"
    @input="updateValue"
  />
</template>

<script setup lang="ts">
interface IProps {
  value: string;
}

defineProps<IProps>();

const emit = defineEmits(['update']);

const updateValue = (e: Event) => {
  emit('update', (e.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.input-text-base {
  display: block;
  width: 100%;
  padding: 8px 10px;
  font-size: 12px;
  color: $color-global;
  border: 1px solid #000000;
  outline: none;
}
</style>