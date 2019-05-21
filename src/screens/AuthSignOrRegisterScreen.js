import React from 'react';
import { Localization } from 'expo';
import i18n from 'i18n-js';
import AuthSignOrRegisterContainer from '../containers/AuthSignOrRegisterContainer';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class AuthSignOrRegisterScreen extends React.PureComponent {
  static navigationOptions = {
    title: `${i18n.t('Welcome')}`,
  };

  render() {
    return <AuthSignOrRegisterContainer />;
  }
}

export default AuthSignOrRegisterScreen;
