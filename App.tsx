import './dayjs.extend';
import './console';
import './default-components-props';
import '@/i18n';

import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';
import { Provider as ProviderRedux } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Sentry from 'sentry-expo';

import AppRoot from '@/index';
import { getStore } from '@/stores';

SplashScreen.preventAutoHideAsync();

LogBox.ignoreAllLogs();

const { store, persistor } = getStore();

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  debug: false,
  enableInExpoDevelopment: false,
});

export default function App() {
  return (
    <ProviderRedux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoot />
      </PersistGate>
    </ProviderRedux>
  );
}
