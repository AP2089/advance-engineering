import { configure } from 'vee-validate';
import { setLocale } from 'yup';
import { ru } from 'yup-locales';

configure({
  validateOnInput: true
});

setLocale(ru);

export * from 'vee-validate';
export * as yup from 'yup';