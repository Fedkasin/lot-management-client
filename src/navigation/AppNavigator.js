import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
import { APP_STACK, AUTH_STACK } from '../constants/Routes';

export default createSwitchNavigator(
  {
    [APP_STACK]: MainTabNavigator,
    [AUTH_STACK]: AuthNavigator,
  },
  {
    initialRouteName: AUTH_STACK,
  }
);
