import { NavigationProp, NavigationState, PartialState, Route, RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Demo?: undefined;
  Demo1?: undefined;
};

export type RootAllParamList = RootStackParamList;

export type KeyOfRouteNameRootStack = keyof RootStackParamList;
export type KeyofRouteNameAll = keyof RootAllParamList;

// Stack
export type StackRootNavigation<RouteName extends KeyOfRouteNameRootStack = KeyOfRouteNameRootStack> = NavigationProp<
  RootStackParamList,
  RouteName
>;
export type StackRootRoute<RouteName extends KeyOfRouteNameRootStack = KeyOfRouteNameRootStack> = RouteProp<
  RootStackParamList,
  RouteName
>;

export type RootNativeStackNavigationScreenProps<RouteName extends KeyOfRouteNameRootStack = KeyOfRouteNameRootStack> =
  {
    route: StackRootRoute<RouteName>;
    navigation: StackRootNavigation<RouteName>;
  };

export type NavigationRoute<
  ParamList extends RootAllParamList = RootAllParamList,
  RouteName extends KeyofRouteNameAll = KeyofRouteNameAll,
> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
};
