<template>
  <form
    @submit="submit"
  >
    <MessageBase
      v-if="isErrorForm"
      :text="$t('error.login.form')"
    />

    <FormControl
      :placeholder="$t('user')"
      :value="user"
      :error="errors.user"
      @update="$emit('update:user', $event)"
    />

    <FormControl
      :placeholder="$t('password')"
      :value="password"
      :error="errors.password"
      @update="$emit('update:password', $event)"
    />

    <ButtonBase type="submit">{{ $t('login') }}</ButtonBase>
  </form>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import FormControl from '@/ui/FormControl.vue';
import ButtonBase from '@/ui/ButtonBase.vue';
import MessageBase from '@/ui/MessageBase.vue';

const { resetForm } = defineProps<{
  user: string;
  password: string;
  errors: {
    user?: string;
    password?: string;
  };
  isErrorForm: boolean;
  submit: () => void;
  resetForm: () => void;
}>();

onMounted(() => {
  resetForm();
});
</script>