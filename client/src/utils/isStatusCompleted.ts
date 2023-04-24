import i18n from '@/plugins/i18n';

export default (status: string) => {  
  return status === i18n.global.t('completed') ? true : false;
}