import tw from '@/shared/styles/tw';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabsNavigation from './bottomTabs/BottomTabsNavigation';
import { RootStackParamList } from './root/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <SafeAreaView style={tw`flex-1`} edges={['left', 'right', 'bottom', 'top']}>
      <RootStack.Navigator
        initialRouteName={'BottomTab'}
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="BottomTab" component={BottomTabsNavigation} />
      </RootStack.Navigator>
    </SafeAreaView>
  );
};

export default RootNavigation;
