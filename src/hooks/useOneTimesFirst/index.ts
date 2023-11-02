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

import { FontFamilyName } from '@/themes/type';

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

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  useEffect(() => {
    if (loadedFonts) {
      setReady(true);
    }
  }, [loadedFonts]);

  return {
    ready,
  };
};
