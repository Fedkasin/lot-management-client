import React, { PureComponent } from 'react';
import ProfileContainer from '../containers/ProfileContainer';
import t from '../helpers/i18helper';

class ProfileScreen extends PureComponent {
  static navigationOptions = () => ({
    title: t('SETTINGS'),
  });

  render() {
    return <ProfileContainer />;
  }
}


export default ProfileScreen;
