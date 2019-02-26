import React, { PureComponent } from 'react';
import {
  ActivityIndicator, View, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import { APP_TAB, AUTH_STACK } from '../constants/Routes';
import { isLoggedIn /* signOut */ } from '../helpers/authHelpers';

class AuthLoadingScreen extends PureComponent {
  // Fetch the token from storage then navigate to our appropriate place
  componentDidMount() {
    const { navigation } = this.props;
    isLoggedIn(user => {
      navigation.navigate(user ? APP_TAB : AUTH_STACK);
    });
  }

  render() {
    return (
      <View style={{
        width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AuthLoadingScreen;
