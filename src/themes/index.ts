import { createContext } from 'react';

import { ThemeProviderType } from './type';

export const ThemeModeContext = createContext<ThemeProviderType>({
  mode: 'light',
  isFollowSystem: true,
  setMode() {
    //
  },
  switchToSystem: () => {
    //
  },
  loading: false,
});
