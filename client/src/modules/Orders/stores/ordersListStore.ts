import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import axios from '@/plugins/axios';
import { useI18n } from '@/plugins/i18n';
import { Header } from 'vue3-easy-data-table';
import useGeneralStore from '@/composables/useGeneralStore';
import isAdmin from '@/utils/isAdmin';
import { IOrder } from '@/types/Order';

const useOrdersList = defineStore('ordersList', () => {
  const items = ref<IOrder[]>([]);
  const isLoading = ref(false);
  const toast = useToast();
  const { t } = useI18n();
  const generalStore = useGeneralStore();

  const headers: Header[] = [
    { text: t('table.number'), value: 'id' },
    { text: t('table.client.name'), value: 'name' },
    { text: t('table.address'), value: 'address', sortable: true },
    { text: t('table.order.date'), value: 'date', sortable: true },
    { text: t('table.status'), value: 'status' },
    { text: t('table.comment'), value: 'comment' }
  ];

  if (isAdmin(generalStore.user?.role)) {
    headers.push({ text: '', value: 'operation', width: 200 })
  }

  const getItems = async () => {    
    try {
      isLoading.value = true;

      const { data } = await axios.get('/events');
      items.value = data;
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      isLoading.value = false;
    }
  }

  const changeStatusItem = async (id: number) => {   
    try {
      isLoading.value = true;

      await axios.patch(`/events/${id}`, {
        status: t('completed')
      });

      await getItems();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      isLoading.value = false;
    }
  }

  const removeItem = async (id: number) => {
    try {
      isLoading.value = true;

      await axios.delete(`/events/${id}`);
      await getItems();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    headers,
    items,
    isLoading,
    user: generalStore.user,
    changeStatusItem,
    removeItem,
    getItems
  }
});

export default useOrdersList;