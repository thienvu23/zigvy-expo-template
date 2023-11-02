import { createStackNavigator } from '@react-navigation/stack';
import { memo } from 'react';

import NavigationBar from './components/NavigationBar';

import Demo from '@/screens/Demo';

const Stack = createStackNavigator();

const DemoStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Demo"
      screenOptions={{ header: (headerProps) => <NavigationBar {...headerProps} /> }}>
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Demo1" component={Demo} />
    </Stack.Navigator>
  );
};

export default memo(DemoStack);
