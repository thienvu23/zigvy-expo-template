import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import React, { Suspense } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';

import useOneTimesFirst from './hooks/useOneTimesFirst';
import { ThemeModeContext } from './themes';
import { useAppSwitchThemeMode } from './themes/hooks/useAppSwitchThemeMode';
import tamaguiConfig from '../tamagui.config';

import RootNavigation from '@/navigation';

const AppRoot = () => {
  const { ready } = useOneTimesFirst();
  const themeHandler = useAppSwitchThemeMode();

  if (themeHandler.loading || !ready) return null;

  return (
    <ThemeModeContext.Provider value={themeHandler}>
      <TamaguiProvider config={tamaguiConfig} defaultTheme={themeHandler.mode || 'light'}>
        <Theme name={themeHandler.mode}>
          <NavigationContainer theme={themeHandler.mode === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme}>
            {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
            <Suspense>
              <RootNavigation />
            </Suspense>
          </NavigationContainer>
        </Theme>
      </TamaguiProvider>
    </ThemeModeContext.Provider>
  );
};

export default React.memo(AppRoot);
