import { createStackNavigator } from 'react-navigation';

import AuthSignOrRegisterScreen from '../screens/AuthSignOrRegisterScreen';
import AuthFormScreen from '../screens/AuthFormScreen';
import { AUTH_SIGN_OR_REGISTER, AUTH_FORM } from '../constants/Routes';

const AuthNavigator = createStackNavigator({
  [AUTH_SIGN_OR_REGISTER]: AuthSignOrRegisterScreen,
  [AUTH_FORM]: AuthFormScreen,
});

export default AuthNavigator;
