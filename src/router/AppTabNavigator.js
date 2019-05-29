/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import t from '../helpers/i18helper';
import {
  PROFILE_SCREEN,
  CAR_LOTS_SCREEN,
  HOUSE_LOTS_SCREEN,
  HOUSE_WATCH_LOTS_SCREEN,
  HOUSE_FILTER_SCREEN,
  HOUSE_WATCH_FILTER_SCREEN,
  JOB_WATCH_SCREEN,
} from '../constants/Routes';
import TabBarIcon from '../components/core/TabBarIcon';
import CarLotsScreen from '../screens/CarLotsScreen';
import HouseLotsScreen from '../screens/HouseLotsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HouseWatchLotsScreen from '../screens/HouseWatchLotsScreen';

import HouseFilterScreen from '../screens/HouseFilterScreen';
import HouseWatchFilterScreen from '../screens/HouseWatchFilterScreen';
import JobWatchLotsScreen from '../screens/JobWatchLotsScreen';

const ProfileStack = createStackNavigator({
  [PROFILE_SCREEN]: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: t('PROFILE'),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const CarLotsStack = createStackNavigator({
  [CAR_LOTS_SCREEN]: CarLotsScreen,
});

CarLotsStack.navigationOptions = {
  tabBarLabel: t('CARS'),
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
  tabBarLabel: t('HOUSES_ALL'),
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
  [JOB_WATCH_SCREEN]: JobWatchLotsScreen,
});

HouseWatchLotsStack.navigationOptions = {
  tabBarLabel: t('HOUSES_LIVE'),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-briefcase' : 'md-briefcase'}
    />
  ),
};

export default createBottomTabNavigator(
  {
    ProfileStack,
    CarLotsStack,
    HouseLotsStack,
    HouseWatchLotsStack,
  },
  {
    initialRouteName: 'ProfileStack',
  },
);
