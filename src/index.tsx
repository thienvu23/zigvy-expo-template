import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Stack, Text } from 'tamagui';

const AppRoot = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <Stack f={1} bg="$background" mt="$h1" jc="center" ai="center">
      <Text color="$color">123123</Text>
    </Stack>
  );
};

export default React.memo(AppRoot);
