import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, Alert,
} from 'react-native';
import { withNavigation } from 'react-navigation';
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
});

class AuthSignOrRegister extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    const { navigation } = this.props;
    navigation.navigate('AuthFormScreen');
  }

  regist() {
    Alert.alert('Sorry, this option is temporary not avalible');
  }

  render() {
    return (
      <View style={styles.container}>
        <IcoButton
          text="SIGN IN"
          color="#28a745"
          onPress={this.login}
          textColor="#f8f9fa"
          iconColor="#f8f9fa"
          iosIcon="ios-key"
          otherIcon="md-key"
        />
        <Text style={styles.text}>or</Text>
        <IcoButton
          text="SIGN UP"
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
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withNavigation(AuthSignOrRegister);
