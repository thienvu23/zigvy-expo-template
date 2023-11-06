import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';

import useOneTimesFirst from './hooks/useOneTimesFirst';
import tamaguiConfig from '../tamagui.config';

import RootNavigation from '@/navigation';

const AppRoot = () => {
  const { ready, themeMode } = useOneTimesFirst();

  if (!ready) return null;

  return (
    <>
      <StatusBar style={themeMode} animated />
      <TamaguiProvider config={tamaguiConfig} defaultTheme={themeMode}>
        <Theme name={themeMode}>
          <NavigationContainer theme={themeMode === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme}>
            {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
            <Suspense>
              <RootNavigation />
            </Suspense>
          </NavigationContainer>
        </Theme>
      </TamaguiProvider>
    </>
  );
};

export default React.memo(AppRoot);
