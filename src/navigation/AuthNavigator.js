import { createStackNavigator } from 'react-navigation';

import AuthSignOrRegisterScreen from '../screens/AuthSignOrRegisterScreen';
import { AUTH_SIGN_OR_REGISTER_SCREEN } from '../constants/Routes';

const AuthNavigator = createStackNavigator({
  [AUTH_SIGN_OR_REGISTER_SCREEN]: AuthSignOrRegisterScreen,
});

export default AuthNavigator;
