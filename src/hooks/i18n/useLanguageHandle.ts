import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { LANG_CODES, LanguageKey } from '@/i18n';

export default () => {
  const { i18n } = useTranslation();
  const languageKey = i18n.language as LanguageKey;

  const setLanguage = useCallback(
    (l: LanguageKey) => {
      return i18n.changeLanguage(l);
    },
    [i18n],
  );

  const nextLanguage = useCallback(() => {
    let nextIndex = +LANG_CODES.indexOf(languageKey) + 1;
    nextIndex = nextIndex <= LANG_CODES.length - 1 ? nextIndex : 0;

    setLanguage(LANG_CODES[nextIndex]).catch((error) => {
      console.error('[Error] changeLanguage: ', error);
    });
  }, [setLanguage, languageKey]);

  return {
    nextLanguage,
    setLanguage,
    currentLanguage: languageKey,
  };
};
