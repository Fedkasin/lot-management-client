import { createAppContainer, createStackNavigator } from 'react-navigation';
import AppStackNavigator from './AppStackNavigator';
import AuthStackNavigatior from './AuthStackNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import { AUTH_LOADING, AUTH_STACK, APP_TAB } from '../constants/Routes';

export default createAppContainer(createStackNavigator(
  {
    [APP_TAB]: AppStackNavigator,
    [AUTH_STACK]: AuthStackNavigatior,
    [AUTH_LOADING]: AuthLoadingScreen,
  },
  {
    initialRouteName: AUTH_LOADING,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
));
