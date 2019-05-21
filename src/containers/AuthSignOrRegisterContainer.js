import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Alert, ActivityIndicator, StyleSheet, Text, View,
} from 'react-native';
import { DangerZone, Localization } from 'expo';
import i18n from 'i18n-js';

import { googleAuthorizationConfig } from '../constants/Config';
import actions from '../store/actions';
import ErrorContainer from '../components/core/ErrorContainer';
import IcoButton from '../components/core/IcoButton';
import * as Colors from '../constants/Colors';
import Locales from '../../assets/locales';

const { Lottie } = DangerZone;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 21,
    textAlign: 'center',
    marginBottom: 20,
  },
  lottieLogo: {
    width: '100%',
    height: '40%',
    marginTop: 10,
    marginBottom: 20,
  },
});

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

class AuthSignOrRegisterContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    const { onSignIn } = this.props;
    onSignIn();
  }

  onSignUp() {
    Alert.alert(`${i18n.t('Sorry, this option is temporary not avalible')}`);
  }

  render() {
    const {
      error, isLoading,
    } = this.props;
    if (isLoading) {
      return <ActivityIndicator size="large" color={Colors.lightGray} style={{ flex: 1 }} />;
    }
    return (
      <View style={styles.container}>
        <Lottie
          ref={animation => {
            if (animation) animation.play();
          }}
          source={require('../../assets/animation/house.json')}
          autoPlay
          loop={false}
          style={styles.lottieLogo}
        />
        <Text style={[styles.text]}>{i18n.t('Please log in using one of your existing accounts:')}</Text>
        <View style={styles.container}>
          <IcoButton
            text="Google"
            color={Colors.white}
            onPress={this.onSignIn}
            textColor={Colors.black}
            iconColor={Colors.black}
            iosIcon="logo-google"
            otherIcon="logo-google"
          />
          <IcoButton
            text="Github"
            color={Colors.white}
            onPress={this.onSignUp}
            textColor={Colors.black}
            iconColor={Colors.black}
            iosIcon="logo-github"
            otherIcon="logo-github"
          />
          <IcoButton
            text="Facebook"
            color={Colors.white}
            onPress={this.onSignUp}
            textColor={Colors.black}
            iconColor={Colors.black}
            iosIcon="logo-facebook"
            otherIcon="logo-facebook"
          />
          { error && <ErrorContainer error={error} /> }
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.authReducers.isLoading,
    error: state.authReducers.error ? state.authReducers.error : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSignIn: () => dispatch(actions.authActions.login(googleAuthorizationConfig)),
  };
}

AuthSignOrRegisterContainer.propTypes = {
  onSignIn: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

AuthSignOrRegisterContainer.defaultProps = {
  error: '',
  onSignIn: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthSignOrRegisterContainer);
