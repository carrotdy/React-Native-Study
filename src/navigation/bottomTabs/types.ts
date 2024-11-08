import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootNavigationProps } from '../root/types';

export type BottomTabsStackParamList = {
  Home: undefined;
  Search: undefined;
  Favorite: undefined;
  MyInfo: undefined;
};

export type BottomTabsNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsStackParamList>,
  RootNavigationProps
>;
