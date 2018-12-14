import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LotsScreen from '../screens/LotsScreen';
import ConfigurationScreen from '../screens/ConfigurationScreen';

const ConfigurationStack = createStackNavigator({
  Configuration: ConfigurationScreen,
});

ConfigurationStack.navigationOptions = {
  tabBarLabel: 'Configuration',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-options'
          : 'md-information-circle'
      }
    />
  ),
};

const LotsStack = createStackNavigator({
  Lots: LotsScreen,
});

LotsStack.navigationOptions = {
  tabBarLabel: 'Lots',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-menu' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ConfigurationStack,
  LotsStack,
});
