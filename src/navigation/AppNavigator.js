import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
import { APP, AUTH } from '../constants/Routes';

export default createSwitchNavigator(
  {
    [APP]: MainTabNavigator,
    [AUTH]: AuthNavigator,
  },
  {
    initialRouteName: AUTH,
  }
);
