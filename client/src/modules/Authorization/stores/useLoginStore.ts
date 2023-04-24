import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import { useForm, useField, yup } from '@/plugins/validate';
import axios from '@/plugins/axios';
import { useRouter } from '@/router';
import useGeneral from '@/composables/useGeneralStore';

type ILoginParams = {
  user: string;
  password: string;
}

const schema = yup.object({
  user: yup.string().required(),
  password: yup.string().min(8).required()
});

const useLogin = defineStore('login', () => {
  const isLoading = ref(false);
  const isErrorForm = ref(false);
  const toast = useToast();
  const general = useGeneral();
  const router = useRouter();

  const { errors, handleSubmit, resetForm } = useForm({
    validationSchema: schema,
    keepValuesOnUnmount: true,
    initialValues: {
      user: '',
      password: ''
    }
  });

  const { value: user } = useField<string>('user');
  const { value: password } = useField<string>('password');

  const login = handleSubmit(async (payload: ILoginParams) => {
    console.log(payload);
    
    try {
      isLoading.value = true;

      const { data } = await axios.post('/login', payload);

      if (data) {
        localStorage.setItem('userStore', JSON.stringify(data));

        general.setAuth({
          isAuth: true,
          user: data
        });
        
        router.push('/');
        isErrorForm.value = false;
        resetForm();
      } else {
        isErrorForm.value = true;
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      isLoading.value = false;
    }
  });

  const logout = () => {
    localStorage.removeItem('userStore');
    window.location.href = '/login';
  }

  return {
    user,
    password,
    errors,
    isErrorForm,
    isLoading,
    login,
    logout,
    resetForm
  }
});

export default useLogin;