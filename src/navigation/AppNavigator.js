import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

export default createSwitchNavigator(
  {
    App: MainTabNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
);
