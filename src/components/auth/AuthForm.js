/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import {
  compose, withHandlers, withState,
} from 'recompose';
import PropTypes from 'prop-types';
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
    height: 40,
    width: '90%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    opacity: 0.5,
    padding: 5,
    fontSize: 20,
    marginTop: 0,
    marginBottom: 20,
  },
});

class AuthForm extends PureComponent {
  render() {
    const {
      handleClick, handlePassword, handleLogin, authError,
    } = this.props;

    return (
      <View style={styles.container}>
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
        <Text style={styles.error}>
          { error }
        </Text>
        <IcoButton
          text="Log In"
          color="#28a745"
          onPress={handleClick}
          textColor="#f8f9fa"
          iconColor="#f8f9fa"
          iosIcon="ios-checkmark"
          otherIcon="md-checkmark"
        />
        { authError && <ErrorContainer error={authError} /> }
        <Text style={styles.error}>
          { error }
        </Text>
        <IcoButton
          text="Log In"
          color="#28a745"
          onPress={handleClick}
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
