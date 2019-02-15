import { createStackNavigator } from 'react-navigation';

import AuthSignOrRegisterScreen from '../screens/AuthSignOrRegisterScreen';
import AuthFormScreen from '../screens/AuthFormScreen';

const AuthNavigator = createStackNavigator({
  AuthSignOrRegisterScreen: { screen: AuthSignOrRegisterScreen },
  AuthFormScreen: { screen: AuthFormScreen },
});

export default AuthNavigator;
