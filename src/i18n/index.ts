/* eslint-disable @typescript-eslint/no-floating-promises */
import 'intl-pluralrules';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import { getLocales } from 'expo-localization';
import i18next, { LanguageDetectorAsyncModule, InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LANGUAGES } from './locales';

import { NestedKeyOf } from '@/types';

import 'dayjs/locale/en';
import 'dayjs/locale/vi';

const i18nConfig: InitOptions = {
  returnNull: false,
  fallbackLng: 'en',
  defaultNS: 'translation',
  resources: LANGUAGES,
  compatibilityJSON: 'v4',
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
};

export type CallbackType = (a: string | undefined) => void;

export const LANG_CODES: LanguageKey[] = Object.keys(LANGUAGES) as LanguageKey[];

export type LanguageKey = keyof typeof LANGUAGES;

type TranslateType = (typeof LANGUAGES)['en']['translation'];
type KeyOfTranslateType = keyof TranslateType;
export type TranslationKeys<ScreenKey extends KeyOfTranslateType | undefined = undefined> =
  ScreenKey extends keyof TranslateType ? NestedKeyOf<TranslateType[ScreenKey]> : NestedKeyOf<TranslateType>;

export const LABEL_BY_CODE: { [k in LanguageKey]: string } = {
  en: 'English',
  vi: 'Việt Nam',
};

const STORAGE_USER_LANGUAGE_KEY = 'user-language';

const LanguageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect(callback: CallbackType) {
    AsyncStorage.getItem(STORAGE_USER_LANGUAGE_KEY, (_, language) => {
      let finalLang = language ?? (i18nConfig.fallbackLng as string);
      if (!language) {
        const firstLocale = getLocales()[0];
        finalLang = firstLocale.languageCode;
      }
      // language for translation
      callback(finalLang);
    });
  },
  cacheUserLanguage: (language: string) => {
    dayjs.locale(language);
    AsyncStorage.setItem(STORAGE_USER_LANGUAGE_KEY, language);
  },
};

i18next.use(LanguageDetector).use(initReactI18next).init(i18nConfig);
