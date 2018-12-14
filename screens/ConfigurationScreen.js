import React from 'react';
import SettingsContainer from '../containers/SettingsContainer';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return <SettingsContainer></SettingsContainer>
  }
}

export default SettingsScreen;