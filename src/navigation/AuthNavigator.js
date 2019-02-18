import { createStackNavigator } from 'react-navigation';

import AuthSignOrRegisterScreen from '../screens/AuthSignOrRegisterScreen';
import AuthFormScreen from '../screens/AuthFormScreen';
import { AUTH_SIGN_OR_REGISTER_SCREEN, AUTH_FORM_SCREEN } from '../constants/Routes';

const AuthNavigator = createStackNavigator({
  [AUTH_SIGN_OR_REGISTER_SCREEN]: AuthSignOrRegisterScreen,
  [AUTH_FORM_SCREEN]: AuthFormScreen,
});

export default AuthNavigator;
