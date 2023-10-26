import "dayjs.extend";
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import AppRoot from '@/index'
import * as SplashScreen from 'expo-splash-screen';
import { FontFamilyName } from '@/themes/type';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';
import { Suspense } from 'react';
import {TamaguiProvider} from 'tamagui';
import tamaguiConfig from './tamagui.config';

SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts({
    [FontFamilyName.Montserrat]: Montserrat_400Regular,
    [FontFamilyName.MontserratBold]: Montserrat_700Bold,
    [FontFamilyName.MontserratBoldItalic]: Montserrat_700Bold_Italic,
    [FontFamilyName.MontserratItalic]: Montserrat_400Regular_Italic,
    [FontFamilyName.MontserratMedium]: Montserrat_500Medium,
    [FontFamilyName.MontserratSemiBold]: Montserrat_600SemiBold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
    <NavigationContainer>
      {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
      <Suspense>
        <StatusBar style="auto" />
        <AppRoot />
      </Suspense>
    </NavigationContainer>
    </TamaguiProvider>
  );
}

