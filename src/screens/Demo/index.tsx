import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Button, Text, YStack } from 'tamagui';

import { StackRootNavigation } from '@/navigation/type';

const DemoScreen = () => {
  const navigation = useNavigation<StackRootNavigation>();
  return (
    <YStack f={1} jc="center" ai="center">
      <Text>DemoScreen</Text>
      <Button onPress={() => navigation.navigate('Demo1')}>Demo1</Button>
    </YStack>
  );
};

export default memo(DemoScreen);
