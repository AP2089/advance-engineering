import { ref, computed } from 'vue';
import { defineStore, getActivePinia, acceptHMRUpdate } from 'pinia';
import { IUser } from '@/types/User';

interface AuthPayload {
  isAuth: boolean;
  user: IUser;
}

const useGeneral = defineStore('general', () => {
  const storesActive = getActivePinia();
  const isAuth = ref(false);
  const user = ref<IUser>(JSON.parse(localStorage.getItem('userStore') || '{}'));

  const setAuth = (payload: AuthPayload) => {
    isAuth.value = payload.isAuth;
    user.value =  payload.user;
  }

  const isLoading = computed(() => {
    if (storesActive) {
      const data = storesActive.state.value;
      const values = [];

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          values.push(data[key].isLoading);
        }
      }
  
      return values.includes(true);
    }

    return false;
  });

  return {
    user,
    isAuth,
    setAuth,
    isLoading
  }
});

export default useGeneral;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGeneral, import.meta.hot));
}