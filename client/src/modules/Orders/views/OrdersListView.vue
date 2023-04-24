<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    :body-row-class-name="addRowClassName"
  >
    <template
      #item-operation="item"
      v-if="isAdmin(user.role)"
    >
      <div class="operations">
        <ButtonOperation
          v-if="!isStatusCompleted(item.status)"
          class="operations__item"
          @click="changeStatusItem(item.id)"
        >
          {{ $t('change.status') }}
        </ButtonOperation>

        <ButtonOperation
          variant="danger"
          class="operations__item"
          @click="modalRemoveShow(item.id)"
        >
          {{ $t('delete.order') }}
        </ButtonOperation>
      </div>
    </template>
  </EasyDataTable>

  <Modal
    :isShow="modalRemove.isShow"
    :hide="modalRemoveHide"
  >
    {{ $t('modal.delete.order') }}

    <template #foot>
      <ButtonBase
        @click="modalRemoveSubmit"
      >
        {{ $t('ok') }}
      </ButtonBase>

      <ButtonBase
        @click="modalRemoveHide"
      >
        {{ $t('cancel') }}
      </ButtonBase>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import Modal from '@/ui/Modal.vue';
import ButtonOperation from '@/ui/ButtonOperation.vue';
import ButtonBase from '@/ui/ButtonBase.vue';
import { Header } from 'vue3-easy-data-table';
import isStatusCompleted from '@/utils/isStatusCompleted';
import isAdmin from '@/utils/isAdmin';
import { IOrder } from '@/types/Order';
import { IUser } from '@/types/User';

const {
  getItems,
  removeItem
} = defineProps<{
  headers: Header[];
  items: IOrder[];
  user: IUser;
  changeStatusItem: (id: number) => Promise<void>;
  removeItem: (id: number) => Promise<void>;
  getItems: () => void;
}>();

const modalRemove = reactive({
  id: -1,
  isShow: false
});

const modalRemoveShow = (id: number) => {
  modalRemove.id = id;
  modalRemove.isShow = true;
}

const modalRemoveHide = () => {
  modalRemove.id = -1;
  modalRemove.isShow = false;
}

const modalRemoveSubmit = () => {
  removeItem(modalRemove.id);
  modalRemoveHide();
}

const addRowClassName = (item: IOrder) => {
  return isStatusCompleted(item.status) ? 'selected' : '';
}

onMounted(() => {
  getItems();
});
</script>

<style lang="scss" scoped>
:deep(.vue3-easy-data-table__body > tr.selected > td) {
  color: $color-extra;
}

.operations {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__item {
    margin-right: 2px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>