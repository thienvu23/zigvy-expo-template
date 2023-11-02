import './dayjs.extend';
import './console';
import './default-components-props';

import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';

import AppRoot from '@/index';

SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppRoot />
    </>
  );
}
