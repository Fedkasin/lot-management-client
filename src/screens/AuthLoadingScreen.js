import React, { PureComponent } from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import { APP_STACK, AUTH_STACK } from '../constants/Routes';
import { isLoggedIn } from '../helpers/authHelpers';

class AuthLoadingScreen extends PureComponent {
  // Fetch the token from storage then navigate to our appropriate place
  componentDidMount() {
    const { navigation } = this.props;
    isLoggedIn(user => {
      navigation.navigate(user ? APP_STACK : AUTH_STACK);
    });
  }

  render() {
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />;
  }
}

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AuthLoadingScreen;
