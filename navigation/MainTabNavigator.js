import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/core/TabBarIcon';
import CarLotsScreen from '../screens/CarLotsScreen';
import HouseLotsScreen from '../screens/HouseLotsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-cog'
          : 'md-information-circle'
      }
    />
  ),
};

const CarLotsStack = createStackNavigator({
  CarLots: CarLotsScreen,
});

CarLotsStack.navigationOptions = {
  tabBarLabel: 'Cars',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-menu' : 'md-options'}
    />
  ),
};

const HouseLotsStack = createStackNavigator({
  HouseLots: HouseLotsScreen,
});

HouseLotsStack.navigationOptions = {
    tabBarLabel: 'Houses',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-information' : 'md-options'}
        />
    ),
};

export default createBottomTabNavigator({
  SettingsStack,
  CarLotsStack,
  HouseLotsStack
});
