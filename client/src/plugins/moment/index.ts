import moment from 'moment';
import { locale } from '@/config';
import 'moment/locale/ru.js';

moment.locale(locale);

export default moment;