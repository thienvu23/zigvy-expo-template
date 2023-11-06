import { useEffect } from 'react';
import { EventArg, NavigationAction, useNavigation } from '@react-navigation/native';

export const useBeforeRemoveAction = (
  callback: (e: EventArg<'beforeRemove', true, { action: NavigationAction }>) => void,
) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('beforeRemove', callback);

    return () => {
      navigation.removeListener('beforeRemove', callback);
    };
  }, [navigation, callback]);
};
