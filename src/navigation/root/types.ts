import { NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabsStackParamList } from '../bottomTabs/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabsStackParamList>;
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;
