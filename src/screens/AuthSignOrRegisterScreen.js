import React from 'react';
import t from '../helpers/i18helper';
import AuthSignOrRegisterContainer from '../containers/AuthSignOrRegisterContainer';

class AuthSignOrRegisterScreen extends React.PureComponent {
  static navigationOptions = {
    title: t('WELCOME'),
  };

  render() {
    return <AuthSignOrRegisterContainer />;
  }
}

export default AuthSignOrRegisterScreen;
