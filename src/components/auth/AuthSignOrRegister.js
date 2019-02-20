import React, { PureComponent } from 'react';
import {
  StyleSheet, Text, View, Button,
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
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
    margin: 20,
  },
});

class AuthSignOrRegister extends PureComponent {
  render() {
    const { onSignIn, onSignUp, error } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bgButton}>
          <Button title="Sign In With Google" onPress={onSignIn} />
        </View>
        <Text style={styles.text}>OR</Text>
        <View style={styles.bgButton}>
          <Button title="Sign Up" onPress={onSignUp} />
        </View>
        { error && <ErrorContainer error={error} /> }
      </View>
    );
  }
}

AuthSignOrRegister.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
  error: PropTypes.string,
};

AuthSignOrRegister.defaultProps = {
  error: null,
};

export default AuthSignOrRegister;
