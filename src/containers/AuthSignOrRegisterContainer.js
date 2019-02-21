import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';

import AuthSignOrRegister from '../components/auth/AuthSignOrRegister';
import { googleAuthorizationConfig } from '../constants/Config';
import actions from '../actions';

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
    Alert.alert('Sorry, this option is temporary not avalible');
  }

  render() {
    const { error, isLogging } = this.props;
    console.log(isLogging);
    if (isLogging) {
      return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />;
    }
    return <AuthSignOrRegister onSignIn={this.onSignIn} onSignUp={this.onSignUp} authError={error} />;
  }
}

function mapStateToProps(state) {
  return {
    isLogging: state.authReducers.isLogging,
    authToken: state.authReducers.authToken,
    error: state.authReducers.error ? state.authReducers.error : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSignIn: () => dispatch(actions.authActions.login(googleAuthorizationConfig)),
  };
}

AuthSignOrRegisterContainer.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  isLogging: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

AuthSignOrRegisterContainer.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(AuthSignOrRegisterContainer));
