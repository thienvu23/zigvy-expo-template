import storage from '@react-native-async-storage/async-storage'; // defaults to localStorage for web
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createFilter, { createBlacklistFilter } from 'redux-persist-transform-filter';

import { systemReducer } from './system';
import { SystemState } from './system/system.types';
// eslint-disable-next-line import/order
import { todoReducer } from './todo';
// generator-flag import-store

import packageJson from '../../package.json';

const saveSystemFilter = createFilter('system', ['themeMode', 'deviceId'] as (keyof SystemState)[]);
const saveSubsetBlacklistFilter = createBlacklistFilter('');

const rootReducers = combineReducers({
  todos: todoReducer,
  system: systemReducer,
  // generator-flag combine-reducers
});

// persistReducer
const reducer = persistReducer<ReturnType<typeof rootReducers>>(
  {
    key: packageJson.name,
    storage,
    blacklist: ['todos'], // add store not persist here
    transforms: [saveSystemFilter, saveSubsetBlacklistFilter], // filter store field perists
    timeout: 0,
  },
  rootReducers,
);

const store = configureStore({
  reducer,
  devTools: __DEV__,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

export const getState = () => store.getState();

export const getStore = () => ({ store, persistor });

// store type
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
