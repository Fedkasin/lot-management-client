import React, { PureComponent } from 'react';
import {
  compose, withHandlers, withState,
} from 'recompose';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import ErrorContainer from '../core/ErrorContainer';
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
  bgContainer: {
    width: '100%',
    alignItems: 'center',
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
    marginTop: 9,
  },
  error: {
    color: '#f00',
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 9,
    opacity: 0.5,
    padding: 5,
    fontSize: 20,
    marginTop: 0,
    marginBottom: 20,
  },
  lottieBack: {
    position: 'absolute',
    width: '100%',
  },
});

class AuthForm extends PureComponent {
  render() {
    const {
      handleClick, handlePassword, handleLogin, authError,
    } = this.props;

    return (
      <View style={styles.container}>
        <LottieView
          source={require('../../../assets/animation/world-map.json')}
          style={styles.lottieBack}
          autoPlay
          loop
        />
        <View style={styles.bgContainer}>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            autoFocus
            onEndEditing={handleLogin}
            placeholder="your e-mail"
            maxLength={20}
            textContentType="emailAddress"
            style={[styles.input, styles.colorLight]}
          />
        </View>
        <View style={styles.bgContainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            secureTextEntry
            onEndEditing={handlePassword}
            placeholder="8 symbols at least"
            style={[styles.input, styles.colorLight]}
          />
        </View>
        { authError && <ErrorContainer error={authError} /> }
        <Button title="Log In" onPress={handleClick} />
        <Text style={styles.error}>
          { error }
        </Text>
        <IcoButton
          text="Log In"
          color="#28a745"
          onPress={this.handleClick}
          textColor="#f8f9fa"
          iconColor="#f8f9fa"
          iosIcon="ios-checkmark"
          otherIcon="md-checkmark"
        />
      </View>
    );
  }
}

AuthForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

AuthForm.defaultProps = {
  authError: null,
};

export default compose(
  withState('login', 'setLogin', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    handleClick: props => () => {
      const { onSignIn, login, password } = props;
      onSignIn(login, password);
    },
    handleLogin: props => e => {
      props.setLogin(e.nativeEvent.text);
    },
    handlePassword: props => e => {
      props.setPassword(e.nativeEvent.text);
    },
  }),
)(AuthForm);
