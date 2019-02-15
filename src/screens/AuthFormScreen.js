import React from 'react';
import AuthFormContainer from '../containers/AuthFormContainer';

class AuthFormScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return <AuthFormContainer />;
  }
}

export default AuthFormScreen;
