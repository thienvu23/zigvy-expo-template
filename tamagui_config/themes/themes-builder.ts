import {
  PaletteDefinitions,
  ThemeDefinitions,
  createThemeBuilder,
} from '@tamagui/theme-builder';
import {palettesColorBuilder} from '../tokens/color';
import transform from 'lodash/transform';

const LIGHT_THEME_KEY = 'light';
const DARK_THEME_KEY = 'dark';

const themesByPalettes = transform<
  PaletteDefinitions,
  ThemeDefinitions<string>
>(
  palettesColorBuilder,
  (result, _, key) => {
    const isDark = (key as string).includes(DARK_THEME_KEY);
    result[key] = {
      template: isDark ? DARK_THEME_KEY : LIGHT_THEME_KEY,
      palette: key as string,
    };
  },
  {},
);

const defaultTheme = {
  color1: 1,
  color2: 2,
  color3: 3,
  color4: 4,
  color5: 5,
  color6: 6,
  color7: 7,
  color8: 8,
  color9: 9,
  color10: 10,
  color11: 11,
  color12: 12,

  // WEB NOT INUSE
  backgroundHover: 3,
  backgroundFocus: 5,
  colorHover: -2,
  colorFocus: -2,
  borderColorHover: 6,
  borderColorFocus: 4,
};

/**
 * @description edit color on paletteColor
 * @description run yarn theme-builder after edit anything
 */
const themesBuilder = createThemeBuilder()
  .addPalettes(palettesColorBuilder)
  .addTemplates({
    [DARK_THEME_KEY]: {
      // Root base color for tamagui component
      ...defaultTheme,
      background: 2,
      backgroundPress: 4,
      backgroundStrong: 1,
      backgroundTransparent: 0,

      color: -1,
      colorPress: -1,
      colorTransparent: -0,

      borderColor: 5,
      borderColorPress: 5,
      placeholderColor: -4,
    },
    [LIGHT_THEME_KEY]: {
      // Root base color for tamagui component
      ...defaultTheme,
      background: -1,
      backgroundPress: -0,
      backgroundStrong: -0,
      backgroundTransparent: 0,

      color: 1,
      colorPress: 1,
      colorTransparent: -0,

      borderColor: -5,
      borderColorPress: -5,
      placeholderColor: 4,
    },
  })
  .addThemes({
    ...themesByPalettes,
  });

export const themes = themesBuilder.build();
