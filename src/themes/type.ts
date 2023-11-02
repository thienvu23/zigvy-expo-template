import { ColorSchemeName } from 'react-native';

export enum FontFamilyName {
  MontserratSemiBold = 'Montserrat-SemiBold',
  Montserrat = 'Montserrat-Regular',
  MontserratBold = 'Montserrat-Bold',
  MontserratBoldItalic = 'Montserrat-BoldItalic',
  MontserratItalic = 'Montserrat-Italic',
  MontserratMedium = 'Montserrat-Medium',
}

export type ThemeMode = ColorSchemeName;

export type ThemeProviderType = {
  mode: ThemeMode;
  isFollowSystem: boolean;
  setMode(_: NonNullable<ThemeMode>): void;
  switchToSystem(): void;
  loading: boolean;
};
