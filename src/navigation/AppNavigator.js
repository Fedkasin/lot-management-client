import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

export default AppNavigator = createSwitchNavigator(
  {
    App: MainTabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'Auth'
  }
);
