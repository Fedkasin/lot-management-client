import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import AuthSignOrRegisterScreen from '../screens/AuthSignOrRegisterScreen';
import AuthFormScreen from '../screens/AuthFormScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AuthNavigator = createStackNavigator({
    AuthSignOrRegisterScreen: {screen: AuthSignOrRegisterScreen},
    AuthFormScreen: { screen: AuthFormScreen }
});

export default AuthNavigator;