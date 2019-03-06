import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppTabNavigator from './AppTabNavigator';
import AuthStackNavigatior from './AuthStackNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import { AUTH_LOADING, AUTH_STACK, APP_TAB } from '../constants/Routes';

const AppNavigator = createSwitchNavigator(
  {
    [APP_TAB]: AppTabNavigator,
    [AUTH_STACK]: AuthStackNavigatior,
    [AUTH_LOADING]: AuthLoadingScreen,
  }, {
    initialRouteName: AUTH_LOADING,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
