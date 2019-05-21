import React, { PureComponent } from 'react';
import { Localization } from 'expo';
import i18n from 'i18n-js';
import ProfileContainer from '../containers/ProfileContainer';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class ProfileScreen extends PureComponent {
  static navigationOptions = () => ({
    title: `${i18n.t('Settings')}`,
  });

  render() {
    return <ProfileContainer />;
  }
}


export default ProfileScreen;
