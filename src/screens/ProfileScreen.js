import React, { PureComponent } from 'react';
import ProfileContainer from '../containers/ProfileContainer';
import t from '../helpers/i18helper';
import * as Colors from '../constants/Colors';

class ProfileScreen extends PureComponent {
  static navigationOptions = () => ({
    title: t('PROFILE'),
    headerStyle: {
      backgroundColor: Colors.silver,
    },
  });

  render() {
    return <ProfileContainer />;
  }
}


export default ProfileScreen;
