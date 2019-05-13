import React, { PureComponent } from 'react';
import ProfileContainer from '../containers/ProfileContainer';

class ProfileScreen extends PureComponent {
  static navigationOptions = () => ({
    title: 'Settings',
  });

  render() {
    return <ProfileContainer />;
  }
}


export default ProfileScreen;
