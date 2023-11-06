import * as Updates from 'expo-updates';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setInstallId } from '@/stores/system';
import { selectInstallId } from '@/stores/system/system.selectors';

export const useCheckOTAUpdate = () => {
  const [updateOTAChecked, setUpdateOTAChecked] = useState(__DEV__);
  const installId = useSelector(selectInstallId);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (__DEV__) return;

      const fetchUpdate = () => {
        Updates.fetchUpdateAsync()
          .then(() => {
            setTimeout(() => {
              Updates.reloadAsync();
            }, 500);
          })
          .catch((e: Error) => {
            setUpdateOTAChecked(true);
            Alert.alert('Can not download update', e.message);
          });
      };

      // cheat for the checkForUpdateAsync is stuck after download the update and reloadAsync;
      const timeout = setTimeout(() => {
        setUpdateOTAChecked(true);
      }, 3000);
      const update = await Updates.checkForUpdateAsync().catch((e: Error) => {
        if (!e.message.includes('has no updates available')) {
          Alert.alert('Can not check update', e.message);
        }
        return { isAvailable: false };
      });
      if (update.isAvailable) {
        clearTimeout(timeout);
        if (process.env.EXPO_PUBLIC_APP_ENV === 'production' || !installId) {
          if (!installId) {
            dispatch(setInstallId(new Date().getTime().toString()));
          }
          setTimeout(() => {
            fetchUpdate();
          }, 500);
        } else {
          Alert.alert('Update available', 'Continue to download', [
            {
              text: 'Cancel',
              style: 'cancel',
              onPress: () => {
                setUpdateOTAChecked(true);
              },
            },
            {
              text: 'Continue',
              onPress: () => fetchUpdate(),
            },
          ]);
        }
      } else {
        clearTimeout(timeout);
        setTimeout(() => setUpdateOTAChecked(true));
      }
    })();

    // Expect run first times
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { updateOTAChecked };
};
