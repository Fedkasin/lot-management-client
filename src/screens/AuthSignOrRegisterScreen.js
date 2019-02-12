import React from 'react';
import AuthSignOrRegisterContainer from '../containers/AuthSignOrRegisterContainer';

class AuthSignOrRegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    return <AuthSignOrRegisterContainer navigation={this.props.navigation} />
  }
}

export default AuthSignOrRegisterScreen;
