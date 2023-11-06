import * as Application from 'expo-application';
import { InteractionManager } from 'react-native';

import { isIOS } from '@/constants';

export const getDeviceId = async () => {
  let deviceId = Application.androidId as string;
  if (isIOS) {
    deviceId = (await Application.getIosIdForVendorAsync()) as string;
  }

  if (!deviceId) {
    // Create a installId
    const installId = new Date().getTime().toString();
    if (installId) {
      deviceId = installId;
    }
  }

  return deviceId;
};

export const interactionPromise = () => {
  return new Promise((rs) => {
    InteractionManager.runAfterInteractions(() => rs(''));
  });
};

export const delayPromise = (time: number) => {
  return new Promise((rs) => {
    setTimeout(() => rs(''), time);
  });
};
