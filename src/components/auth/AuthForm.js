import React, { PureComponent } from 'react';
import {
  compose, withHandlers, withState,
} from 'recompose';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import ErrorContainer from '../core/ErrorContainer';
import ButtonIcon from '../core/ButtonIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  bgButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 50,
    marginTop: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 9,
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
  error: {
    color: '#f00',
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 9,
    padding: 5,
    fontSize: 20,
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
            style={[styles.input, styles.colorLight]}
          />
        </View>
        <View style={styles.bgButton}>
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
        <View style={styles.bgButton}>
          <TouchableOpacity onPress={this.handleClick} style={[styles.button, styles.colorInfo]}>
            <ButtonIcon
              name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
              color="#f8f9fa"
            />
            <Text style={[styles.text, styles.textLight]}>Log In</Text>
          </TouchableOpacity>
        </View>
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
