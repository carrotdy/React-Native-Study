import FavoriteScreen from '@/screens/bottomTabs/Favorite';
import HomeScreen from '@/screens/bottomTabs/Home';
import MyInfoScreen from '@/screens/bottomTabs/MyInfo';
import SearchScreen from '@/screens/bottomTabs/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { BottomTabsStackParamList } from './types';

const { Navigator, Screen } =
  createBottomTabNavigator<BottomTabsStackParamList>();

const BottomTabsNavigation: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Search" component={SearchScreen} />
      <Screen name="Favorite" component={FavoriteScreen} />
      <Screen name="MyInfo" component={MyInfoScreen} />
    </Navigator>
  );
};

export default BottomTabsNavigation;
