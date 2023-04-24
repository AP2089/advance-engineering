<template>
  <form
    @submit="submit"
    class="narrow"
  >
    <FormControl
      :placeholder="$t('enter.your.name')"
      :value="name"
      :error="errors.name"
      @update="$emit('update:name', $event)"
    />

    <FormControl
      :placeholder="$t('enter.your.address')"
      :value="address"
      :error="errors.address"
      @update="$emit('update:address', $event)"
    />

    <FormControl
      :placeholder="$t('comment')"
      :value="comment"
      :error="errors.comment"
      @update="$emit('update:comment', $event)"
    />

    <ButtonBase type="submit">{{ $t('add.order') }}</ButtonBase>
  </form>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import FormControl from '@/ui/FormControl.vue';
import ButtonBase from '@/ui/ButtonBase.vue';

const { resetForm } = defineProps<{
  name: string;
  address: string;
  comment: string;
  errors: {
    name?: string;
    address?: string;
    comment?: string;
  };
  submit: () => void;
  resetForm: () => void;
}>();

onMounted(() => {
  resetForm();
});
</script>