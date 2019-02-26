import React, { PureComponent } from 'react';
import { View } from 'react-native';
import SettingsContainer from '../containers/SettingsContainer';
import { signOut } from '../helpers/authHelpers';
import IcoButton from '../components/core/IcoButton';

class SettingsScreen extends PureComponent {
  static navigationOptions = {
    title: 'Settings',
    headerRight: (
      <View style={{ marginBottom: 9, marginRight: 9 }}>
        <IcoButton
          text="Log Out"
          color="#fff"
          onPress={signOut}
          textColor="#131313"
          iconColor="#131313"
          iosIcon="ios-log-out"
          otherIcon="md-log-out"
        />
      </View>
    ),
  };

  render() {
    return <SettingsContainer />;
  }
}

export default SettingsScreen;
