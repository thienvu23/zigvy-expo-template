import { createReducer } from '@reduxjs/toolkit';

import * as actions from './system.actions';
import { SystemState } from './system.types';

const initState: SystemState = {
  themeMode: 'system',
  installId: undefined,
};

export const systemReducer = createReducer(initState, (builder) => {
  builder
    .addCase(actions.setThemeMode, (state, action) => {
      return {
        ...state,
        themeMode: action.payload,
      };
    })
    .addCase(actions.setInstallId, (state, action) => {
      return {
        ...state,
        installId: action.payload,
      };
    });
});
