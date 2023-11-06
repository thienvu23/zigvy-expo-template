import { createAction } from '@reduxjs/toolkit';

import { ThemeMode } from '@/types/themes';

export const setThemeMode = createAction<ThemeMode>('system/set-theme-mode');

export const setInstallId = createAction<string>('system/set-install-id');
