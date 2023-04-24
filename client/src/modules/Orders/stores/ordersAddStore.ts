import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import { useForm, useField, yup } from '@/plugins/validate';
import axios from '@/plugins/axios';
import moment from '@/plugins/moment';
import { useRouter } from '@/router';
import { useI18n } from '@/plugins/i18n';
import useGeneralStore from '@/composables/useGeneralStore';

const schema = yup.object({
  name: yup.string().required(),
  address: yup.string().required(),
  comment: yup.string()
});

const useOrdersAdd = defineStore('ordersAdd', () => {
  const isLoading = ref(false);
  const toast = useToast();
  const router = useRouter();
  const { t } = useI18n();
  const generalStore = useGeneralStore();

  const { errors, handleSubmit, resetForm } = useForm({
    validationSchema: schema,
    keepValuesOnUnmount: true,
    initialValues: {
      name: generalStore.user?.name || '',
      address: '',
      comment: ''
    }
  });

  const { value: name } = useField<string>('name');
  const { value: address } = useField<string>('address');
  const { value: comment } = useField<string>('comment');

  const submit = handleSubmit(async payload => {
    try {
      isLoading.value = true;

      const formdata = {
        ...payload,
        date: moment().format('DD MMMM YYYY'),
        status: t('new')
      }

      await axios.post('/events', formdata);
      resetForm();
      router.push('/');
      toast.success(t('order.added'));
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      isLoading.value = false;
    }
  });

  return {
    name,
    address,
    comment,
    errors,
    isLoading,
    submit,
    resetForm
  }
});

export default useOrdersAdd;