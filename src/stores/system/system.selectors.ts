import { RootState } from '../';

export const selectThemeMode = (state: RootState) => state.system.themeMode;

export const selectInstallId = (state: RootState) => state.system.installId;

export const selectRehydrateReady = (state: RootState): boolean => {
  // eslint-disable-next-line prettier/prettier
  return !!(state as any)._persist?.rehydrated;
};
