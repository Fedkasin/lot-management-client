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
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  bgContainer: {
    width: '100%',
    alignItems: 'center',
  },
  textLight: {
    color: Colors.white,
  },
  textDark: {
    color: Colors.gray,
  },
  text: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 9,
  },
  error: {
    color: Colors.red,
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: Colors.black,
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
          color={Colors.green}
          onPress={handleClick}
          textColor={Colors.white}
          iconColor={Colors.white}
          iosIcon="ios-checkmark"
          otherIcon="md-checkmark"
        />
        { authError && <ErrorContainer error={authError} /> }
        <Text style={styles.error}>
          { error }
        </Text>
        <IcoButton
          text="Log In"
          color={Colors.green}
          onPress={handleClick}
          textColor={Colors.white}
          iconColor={Colors.white}
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
  withState('rooms', 'setRooms', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    handleClick: props => () => {
      const { rooms, priceFrom, priceTo } = props;
      onSubmitHouseWatchFilters(rooms, priceFrom, priceTo);
    },
    handleRoomsSelected: props => (itemValue) => {
      props.setRooms(itemValue);
    },
    handlePassword: props => e => {
      props.setPassword(e.nativeEvent.text);
    },
  }),
)(AuthForm);
