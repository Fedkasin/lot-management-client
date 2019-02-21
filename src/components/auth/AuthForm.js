import React, { PureComponent } from 'react';
import {
  compose, withHandlers, withState,
} from 'recompose';
import {
  StyleSheet, Text, View, Button, TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import ErrorContainer from '../core/ErrorContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  bgButton: {
    textAlign: 'center',
    width: '75%',
    margin: 10,
  },
  text: {
    fontSize: 26,
  },
  error: {
    color: '#f00',
  },
  input: {
    height: 35,
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
  },
});

class AuthForm extends PureComponent {
  render() {
    const {
      handleClick, handlePassword, handleLogin, authError,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.bgButton}>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            autoFocus
            onEndEditing={handleLogin}
            placeholder="your e-mail"
            maxLength={20}
            textContentType="emailAddress"
            style={styles.input}
          />
        </View>
        <View style={styles.bgButton}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            secureTextEntry
            onEndEditing={handlePassword}
            placeholder="8 symbols at least"
            style={styles.input}
          />
        </View>
        { authError && <ErrorContainer error={authError} /> }
        <Button title="Log In" onPress={handleClick} />
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
