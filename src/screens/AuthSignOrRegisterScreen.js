import React from 'react';
import AuthSignOrRegisterContainer from '../containers/AuthSignOrRegisterContainer';

class AuthSignOrRegisterScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return <AuthSignOrRegisterContainer />;
  }
}

export default AuthSignOrRegisterScreen;
