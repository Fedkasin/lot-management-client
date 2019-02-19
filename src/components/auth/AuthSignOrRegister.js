import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableOpacity, Platform, Button,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ErrorContainer from '../core/ErrorContainer';
import IcoButton from '../core/IcoButton';
import IonIcon from '../core/IonIcon';
import LottieView from 'lottie-react-native';
import IcoButton from '../core/IcoButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  colorSuccess: {
    backgroundColor: '#28a745',
  },
  colorPrimary: {
    backgroundColor: '#007bff',
  },
  colorSecondary: {
    backgroundColor: '#6c757d',
  },
  colorInfo: {
    backgroundColor: '#17a2b8',
  },
  colorWarning: {
    backgroundColor: '#ffc107',
  },
  colorDanger: {
    backgroundColor: '#dc3545',
  },
  colorLight: {
    backgroundColor: '#f8f9fa',
  },
  colorDark: {
    backgroundColor: '#343a40',
  },
  textLight: {
    color: '#f8f9fa',
  },
  textDark: {
    color: '#343a40',
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
    margin: 20,
  },
  lottieLogo: {
    width: '100%',
    marginTop: -60,
    marginBottom: -30,
  },
});

class AuthSignOrRegister extends PureComponent {
  render() {
    const { onSignIn, onSignUp, authError } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bgButton}>
          <Button title="Sign In With Google" onPress={onSignIn} />
          <TouchableOpacity onPress={this.login} style={[styles.button, styles.colorSuccess, styles.textLight]}>
            <IonIcon
              name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'}
              color="#f8f9fa"
            />
            <Text style={[styles.text, styles.textLight]}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>or</Text>
        <View style={styles.bgButton}>
          <Button title="Sign Up" onPress={onSignUp} />
          <TouchableOpacity onPress={this.regist} style={styles.button}>
            <IonIcon
              name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'}
              color="#343a40"
            />
            <Text style={styles.text}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        { authError && <ErrorContainer error={authError} /> }
        <LottieView
          source={require('../../../assets/animation/house.json')}
          style={styles.lottieLogo}
          autoPlay
          loop={false}
        />
        <IcoButton
          text="Sign in"
          color="#28a745"
          onPress={this.login}
          textColor="#f8f9fa"
          iconColor="#f8f9fa"
          iosIcon="ios-key"
          otherIcon="md-key"
        />
        <Text style={styles.text}>or</Text>
        <IcoButton
          text="Sign up"
          color="#fff"
          onPress={this.regist}
          textColor="#343a40"
          iconColor="#343a40"
          iosIcon="ios-create"
          otherIcon="md-create"
        />
      </View>
    );
  }
}

AuthSignOrRegister.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

AuthSignOrRegister.defaultProps = {
  authError: null,
};

export default AuthSignOrRegister;
