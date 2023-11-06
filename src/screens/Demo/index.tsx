import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text, YStack } from 'tamagui';

import useLanguageHandle from '@/hooks/i18n/useLanguageHandle';
import { StackRootNavigation } from '@/navigation/type';
import { setThemeMode } from '@/stores/system';
import { selectThemeMode } from '@/stores/system/system.selectors';

const DemoScreen = () => {
  const navigation = useNavigation<StackRootNavigation>();
  const { t } = useTranslation();

  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();
  const languageHandle = useLanguageHandle();

  return (
    <YStack f={1} jc="center" ai="center" gap="$2">
      <Text>DemoScreen</Text>
      <Button
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate('Demo1');
          }
        }}>
        {navigation.canGoBack() ? 'Back' : 'Demo1'}
      </Button>
      <Button onPress={languageHandle.nextLanguage}>{t('changeLanguage')}</Button>
      <Button
        onPress={() => {
          if (themeMode === 'light') {
            dispatch(setThemeMode('dark'));
          }
          if (themeMode === 'dark') {
            dispatch(setThemeMode('system'));
          }
          if (themeMode === 'system') {
            dispatch(setThemeMode('light'));
          }
        }}>
        Change Theme ({themeMode})
      </Button>
    </YStack>
  );
};

export default memo(DemoScreen);
