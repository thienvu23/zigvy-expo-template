import {addFixObjKeys} from './utils';
import mapValues from 'lodash/mapValues';
 
const lightTransparent = 'rgba(255,255,255,0)';
const darkTransparent = 'rgba(10,10,10,0)';
const lightColor = 'hsl(0, 0%, 9.0%)';

const lightPalette = [
  lightTransparent,
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  lightColor,
  darkTransparent,
];

const darkColor = '#fff';
const darkPalette = [
  darkTransparent,
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  darkColor,
  lightTransparent,
];

export const primary = {
  primary1: '#f9fefd',
  primary2: '#effefa',
  primary3: '#ddfbf3',
  primary4: '#ccf7ec',
  primary5: '#bbeee2',
  primary6: '#a6e1d3',
  primary7: '#87d0bf',
  primary8: '#51bda7',
  primary9: '#86ead4',
  primary10: '#7fe1cc',
  primary11: '#27756a',
  primary12: '#16433c',
};

export const primaryDark = {
  primary1: '#081917',
  primary2: '#0a1f1d',
  primary3: '#0d2927',
  primary4: '#0e322e',
  primary5: '#103b36',
  primary6: '#134842',
  primary7: '#186057',
  primary8: '#248f7d',
  primary9: '#86ead4',
  primary10: '#95f3d9',
  primary11: '#49dfbe',
  primary12: '#c4f5e1',
};

export const secondary = {
  secondary1: '#fdfdfc',
  secondary2: '#f9f9f8',
  secondary3: '#f2f2f0',
  secondary4: '#ebebe9',
  secondary5: '#e4e4e2',
  secondary6: '#ddddda',
  secondary7: '#d3d2ce',
  secondary8: '#bcbbb5',
  secondary9: '#8d8d86',
  secondary10: '#80807a',
  secondary11: '#63635e',
  secondary12: '#21201c',
};

export const secondaryDark = {
  secondary1: '#181816',
  secondary2: '#1b1b1a',
  secondary3: '#282826',
  secondary4: '#30302e',
  secondary5: '#383734',
  secondary6: '#403f3c',
  secondary7: '#4c4b47',
  secondary8: '#62605b',
  secondary9: '#6f6d66',
  secondary10: '#83817a',
  secondary11: '#b2b1aa',
  secondary12: '#eeeeec',
};

export const colorTokens = {
  light: {
    primary,
    secondary,
  },
  dark: {
    primary: primaryDark,
    secondary: secondaryDark,
  },
};

export const darkColors = {
  ...colorTokens.dark.primary,
  ...colorTokens.dark.secondary,
};

export const lightColors = {
  ...colorTokens.light.primary,
  ...colorTokens.light.secondary,
};

export const color = {
  ...addFixObjKeys(lightColors, {postfix: 'Light'}),
  ...addFixObjKeys(darkColors, {postfix: 'Dark'}),
};

export const lightPalettes = {
  light: lightPalette,
  ...mapValues(addFixObjKeys(colorTokens.light, {prefix: 'light_'}), (v: any) =>
    Object.values<string>(v),
  ),
};

export const darkPalettes = {
  dark: darkPalette,
  ...mapValues(addFixObjKeys(colorTokens.dark, {prefix: 'dark_'}), (v: any) =>
    Object.values<string>(v),
  ),
};

export const palettesColorBuilder = {
  ...lightPalettes,
  ...darkPalettes,
};
