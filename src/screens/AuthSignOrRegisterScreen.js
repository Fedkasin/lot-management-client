import React from 'react';
import AuthSignOrRegisterContainer from '../containers/AuthSignOrRegisterContainer';

class AuthSignOrRegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return <AuthSignOrRegisterContainer />;
  }
}

export default AuthSignOrRegisterScreen;
