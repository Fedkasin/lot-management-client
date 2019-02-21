import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableOpacity, Platform, Button,
} from 'react-native';
import LottieView from 'lottie-react-native';
import ErrorContainer from '../core/ErrorContainer';
import IonIcon from '../core/IonIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
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
        <View style={{}}>
          <IonIcon
            name={Platform.OS === 'ios' ? 'ios-key' : 'md-key'}
            color="#131313"
            style={{ marginRight: 9 }}
          />
          <Text style={styles.text}>
Sign In
          </Text>
        </View>
        <Text style={styles.text}>or</Text>
        <View style={styles.bgButton}>
          <TouchableOpacity onPress={onSignIn} style={styles.button}>
            <IonIcon
              name="logo-google"
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
