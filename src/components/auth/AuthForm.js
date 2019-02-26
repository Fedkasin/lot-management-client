import React, { PureComponent } from 'react';
import {
  StyleSheet, Text, View, TextInput, ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../actions/index';
import IcoButton from '../core/IcoButton';
import { APP_STACK } from '../../constants/Routes';

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

let login = null;
let password = null;

class AuthForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { navigation } = this.props;
    if (nextProps.authKey !== null) navigation.navigate(APP_STACK);
  }

  handleClick() {
    const { onFetchAuthKey } = this.props;
    onFetchAuthKey(login, password);
  }

  handleLogin(e) {
    login = e.nativeEvent.text;
  }

  handlePassword(e) {
    password = e.nativeEvent.text;
  }

  render() {
    const { isFetching, error } = this.props;
    if (isFetching) return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />;
    return (
      <View style={styles.container}>
        <View style={styles.bgContainer}>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            autoFocus
            onEndEditing={this.handleLogin}
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
            onEndEditing={this.handlePassword}
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

function mapStateToProps(state) {
  return {
    isFetching: state.authReducers.isFetching,
    login: state.authReducers.login,
    password: state.authReducers.password,
    authKey: state.authReducers.authKey,
    error: state.authReducers.error ? state.authReducers.error : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchAuthKey: (log, pass) => dispatch(actions.authActions.fetchAuthKey({ login: log, password: pass })),
  };
}

AuthForm.propTypes = {
  authKey: PropTypes.string.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  onFetchAuthKey: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.any).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(AuthForm));
