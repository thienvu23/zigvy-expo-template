import 'i18next';
import { LANGUAGES } from './locales';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    resources: typeof LANGUAGES.en;
  }
}
