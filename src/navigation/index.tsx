import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';
import { useTheme } from 'tamagui';

import DemoStack from './DemoStack';
import NavigationBar from './components/NavigationBar';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  const theme = useTheme();

  return (
    <RootStack.Navigator
      screenOptions={{
        header: (headerProps) => <NavigationBar {...headerProps} />,
        gestureEnabled: false,
        animation: 'slide_from_left',
        statusBarTranslucent: true,
        contentStyle: {
          backgroundColor: theme.background.val,
        },
      }}>
      <RootStack.Screen name="DemoStack" component={DemoStack} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

export default memo(RootNavigation);
