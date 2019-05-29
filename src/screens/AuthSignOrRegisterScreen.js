import React from 'react';
import t from '../helpers/i18helper';
import AuthSignOrRegisterContainer from '../containers/AuthSignOrRegisterContainer';
import * as Colors from '../constants/Colors';

class AuthSignOrRegisterScreen extends React.PureComponent {
  static navigationOptions = {
    title: t('WELCOME'),
    headerStyle: {
      backgroundColor: Colors.silver,
    },
  };

  render() {
    return <AuthSignOrRegisterContainer />;
  }
}

export default AuthSignOrRegisterScreen;
