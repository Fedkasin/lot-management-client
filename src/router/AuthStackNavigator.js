import { createStackNavigator } from 'react-navigation';

import AuthSignOrRegisterScreen from '../screens/AuthSignOrRegisterScreen';
import { AUTH_SIGN_OR_REGISTER_SCREEN } from '../constants/Routes';

const AuthStackNavigator = createStackNavigator({
  [AUTH_SIGN_OR_REGISTER_SCREEN]: AuthSignOrRegisterScreen,
}, {
  initialRouteName: AUTH_SIGN_OR_REGISTER_SCREEN,
});

export default AuthStackNavigator;
