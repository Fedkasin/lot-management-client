import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppStackNavigator from './AppStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import { APP_STACK, AUTH_STACK, AUTH_LOADING } from '../constants/Routes';

export default createAppContainer(createSwitchNavigator(
  {
    [AUTH_LOADING]: AuthLoadingScreen,
    [APP_STACK]: AppStackNavigator,
    [AUTH_STACK]: AuthStackNavigator,
  },
  {
    initialRouteName: AUTH_LOADING,
  }
));
