import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StackHeaderProps } from '@react-navigation/stack';
import { memo } from 'react';

import Appbar from '@/components/atoms/Appbar';

const NavigationBar = <T extends Partial<NativeStackHeaderProps | StackHeaderProps>>(props: T) => {
  const { route, options, navigation } = props;
  const isBackVisible = navigation?.canGoBack?.();

  return (
    <Appbar>
      {isBackVisible && <Appbar.BackAction onPress={() => navigation?.goBack()} />}
      <Appbar.Content>{options?.title || route?.name}</Appbar.Content>
    </Appbar>
  );
};

export default memo(NavigationBar);
