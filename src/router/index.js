import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppStackNavigator from './AppStackNavigator';
import AuthStackNavigatior from './AuthStackNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import { AUTH_LOADING, AUTH_STACK, APP_TAB } from '../constants/Routes';

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    [APP_TAB]: AppStackNavigator,
    [AUTH_STACK]: AuthStackNavigatior,
    [AUTH_LOADING]: AuthLoadingScreen,
  }, {
    initialRouteName: AUTH_LOADING,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
));

export default AppNavigator;
