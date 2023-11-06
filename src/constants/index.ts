import dayjs from 'dayjs';
import * as Device from 'expo-device';
import { PixelRatio, Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const isSimulator = !Device.isDevice && isIOS;

export const currentYear = dayjs().get('year');

export const currentMonth = dayjs().get('month') + 1;

export const FONT_SIZE_SCALE = {
  normal: 1,
  maximum: 1.3,
};

const MAX_FONT_SCALE_SYSTEM = 2;

export const calFontScale = () =>
  FONT_SIZE_SCALE.normal +
  ((PixelRatio.getFontScale() - FONT_SIZE_SCALE.normal) * (FONT_SIZE_SCALE.maximum - FONT_SIZE_SCALE.normal)) /
    (MAX_FONT_SCALE_SYSTEM - FONT_SIZE_SCALE.normal);
