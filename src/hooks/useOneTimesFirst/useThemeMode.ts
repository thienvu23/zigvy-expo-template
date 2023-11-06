import { useCallback, useEffect, useRef, useState } from 'react';
import { NativeEventSubscription, Appearance, ColorSchemeName } from 'react-native';
import { useSelector } from 'react-redux';

import { selectThemeMode } from '@/stores/system/system.selectors';

/**
 * @description handle logic switch mode for App.tsx
 * @description If you wanna change theme mode. Use ThemeModeContext instead of
 */
export default () => {
  const themeModeStore = useSelector(selectThemeMode);
  /**
   * @description themeMode only dark or light
   */
  const [themeMode, setThemeMode] = useState<NonNullable<ColorSchemeName>>(Appearance.getColorScheme() ?? 'light');
  const subSystemThemeRef = useRef<NativeEventSubscription>();

  const switchToSystem = useCallback(() => {
    setThemeMode(Appearance.getColorScheme() ?? 'light');
    subSystemThemeRef.current = Appearance.addChangeListener((l) => {
      const nextTheme = l?.colorScheme ?? 'light';
      setThemeMode(nextTheme);
    });

    return () => subSystemThemeRef.current?.remove();
  }, []);

  useEffect(() => {
    if (themeModeStore === 'system') {
      switchToSystem();
    } else {
      subSystemThemeRef.current?.remove();
      setThemeMode(themeModeStore);
    }
  }, [switchToSystem, themeModeStore]);

  return {
    themeMode,
  };
};
