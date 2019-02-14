import React, { PureComponent } from 'react';
import SettingsContainer from '../containers/SettingsContainer';

class SettingsScreen extends PureComponent {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return <SettingsContainer />;
  }
}

export default SettingsScreen;
