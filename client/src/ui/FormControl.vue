<template>
  <div class="form-control">
    <InputTextBase
      :value="value"
      :placeholder="placeholder"
      @update="$emit('update', $event)"
    />

    <MessageBase
      v-if="error"
      :text="error"
      class="form-control__message"
    />
  </div>
</template>

<script setup lang="ts">
import InputTextBase from '@/ui/InputTextBase.vue';
import MessageBase from '@/ui/MessageBase.vue';

interface IProps {
  value: string;
  error?: string;
  placeholder?: string;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
.form-control {
  margin-bottom: 15px;

  &__message {
    padding: 5px 0 0 0;
    margin: 0;
  }
}
</style>