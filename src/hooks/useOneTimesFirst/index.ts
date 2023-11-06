import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import useThemeMode from './useThemeMode';

import { FontFamilyName } from '@/types/themes';
import { useCheckOTAUpdate } from './useCheckOTAUpdate';

const fonts = {
  [FontFamilyName.Montserrat]: Montserrat_400Regular,
  [FontFamilyName.MontserratBold]: Montserrat_700Bold,
  [FontFamilyName.MontserratBoldItalic]: Montserrat_700Bold_Italic,
  [FontFamilyName.MontserratItalic]: Montserrat_400Regular_Italic,
  [FontFamilyName.MontserratMedium]: Montserrat_500Medium,
  [FontFamilyName.MontserratSemiBold]: Montserrat_600SemiBold,
};

export default () => {
  const [loadedFonts] = useFonts(fonts);
  const [ready, setReady] = useState(false);
  const { themeMode } = useThemeMode();
  const { updateOTAChecked } = useCheckOTAUpdate();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  useEffect(() => {
    if (loadedFonts && updateOTAChecked) {
      setReady(true);
    }
  }, [loadedFonts, updateOTAChecked]);

  return {
    ready,
    themeMode,
  };
};
