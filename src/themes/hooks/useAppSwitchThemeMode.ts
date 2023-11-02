import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';
import { NativeEventSubscription, Appearance } from 'react-native';

import { ThemeMode, ThemeProviderType } from '../type';

import { THEME_MODE_KEY } from '@/config/asyncStorage';

/**
 * @description handle logic switch mode for App.tsx
 * @description If you wanna change theme mode. Use ThemeModeContext instead of
 */
export const useAppSwitchThemeMode = (): ThemeProviderType => {
  const [themeMode, setThemeMode] = useState<ThemeMode>();
  const [isFollowSystem, setIsFollowSystem] = useState<boolean>(true);

  const [loadingThemeDone, setLoadingThemeDone] = useState(false);

  const _setThemeMode = useCallback((m: NonNullable<ThemeMode>) => {
    AsyncStorage.setItem(THEME_MODE_KEY, m);
    setIsFollowSystem(false);
    setThemeMode(m);
  }, []);

  const switchToSystem = useCallback(() => {
    AsyncStorage.removeItem(THEME_MODE_KEY);
    setThemeMode(Appearance.getColorScheme());
    setIsFollowSystem(true);
    const sub: NativeEventSubscription = Appearance.addChangeListener((l) => {
      setThemeMode(l?.colorScheme as unknown as ThemeMode);
    });

    return () => sub?.remove();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const m = await AsyncStorage.getItem(THEME_MODE_KEY);

        if (m) {
          setThemeMode(m as ThemeMode);
          setIsFollowSystem(false);
        } else switchToSystem();
      } finally {
        setTimeout(() => setLoadingThemeDone(true));
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    mode: themeMode,
    setMode: _setThemeMode, // cache to storage, not cache with follow system
    loading: !loadingThemeDone,
    switchToSystem,
    isFollowSystem,
  };
};
