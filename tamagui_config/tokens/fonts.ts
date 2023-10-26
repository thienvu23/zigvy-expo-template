export const getFontFamilies = (name = 'Montserrat') => ({
  thin: {
    normal: `${name}-Thin`,
    italic: `${name}-LightItalic`,
  },
  extraLight: {
    normal: `${name}-ExtraLight`,
    italic: `${name}-ExtraLightItalic`,
  },
  light: {
    normal: `${name}-Light`,
    italic: `${name}-LightItalic`,
  },
  regular: {
    normal: `${name}-Regular`,
    italic: `${name}-Italic`,
  },
  medium: {
    normal: `${name}-Medium`,
    italic: `${name}-MediumItalic`,
  },
  semiBold: {
    normal: `${name}-SemiBold`,
    italic: `${name}-SemiBoldItalic`,
  },
  bold: {
    normal: `${name}-Bold`,
    italic: `${name}-BoldItalic`,
  },
  extraBold: {
    normal: `${name}-ExtraBold`,
    italic: `${name}-ExtraBoldItalic`,
  },
  extraBlack: {
    normal: `${name}-ExtraBlack`,
    italic: `${name}-ExtraBlackItalic`,
  },
});
