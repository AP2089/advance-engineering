import { createI18n } from 'vue-i18n';
import { locale } from '@/config';
import ru from './ru.json';

export default createI18n({
  locale,
  allowComposition: true,
  fallbackLocale: locale,
  messages: {
    ru
  }
});

export * from 'vue-i18n';