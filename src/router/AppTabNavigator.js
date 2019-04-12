/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import {
  SETTINGS_SCREEN,
  CAR_LOTS_SCREEN,
  HOUSE_LOTS_SCREEN,
  HOUSE_WATCH_LOTS_SCREEN,
  HOUSE_FILTER_SCREEN,
  HOUSE_WATCH_FILTER_SCREEN,
} from '../constants/Routes';
import TabBarIcon from '../components/core/TabBarIcon';
import CarLotsScreen from '../screens/CarLotsScreen';
import HouseLotsScreen from '../screens/HouseLotsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HouseWatchLotsScreen from '../screens/HouseWatchLotsScreen';

import HouseFilterScreen from '../screens/HouseFilterScreen';
import HouseWatchFilterScreen from '../screens/HouseWatchFilterScreen';

const SettingsStack = createStackNavigator({
  [SETTINGS_SCREEN]: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
    />
  ),
};

const CarLotsStack = createStackNavigator({
  [CAR_LOTS_SCREEN]: CarLotsScreen,
  // [FILTER_SCREEN]: FilterScreen,
});

CarLotsStack.navigationOptions = {
  tabBarLabel: 'Cars',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-car' : 'md-car'}
    />
  ),
};

const HouseLotsStack = createStackNavigator({
  [HOUSE_LOTS_SCREEN]: HouseLotsScreen,
  [HOUSE_FILTER_SCREEN]: HouseFilterScreen,
});

HouseLotsStack.navigationOptions = {
  tabBarLabel: 'Houses (all)',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const HouseWatchLotsStack = createStackNavigator({
  [HOUSE_WATCH_LOTS_SCREEN]: HouseWatchLotsScreen,
  [HOUSE_WATCH_FILTER_SCREEN]: HouseWatchFilterScreen,
});

HouseWatchLotsStack.navigationOptions = {
  tabBarLabel: 'Houses (live)',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    SettingsStack,
    CarLotsStack,
    HouseLotsStack,
    HouseWatchLotsStack,
  },
  {
    initialRouteName: 'SettingsStack',
  },
);
