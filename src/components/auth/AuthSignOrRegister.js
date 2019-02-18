import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, Alert, Button,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { AUTH_FORM_SCREEN } from '../../constants/Routes';

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

class AuthSignOrRegister extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    const { navigation } = this.props;
    navigation.navigate(AUTH_FORM_SCREEN);
  }

  regist() {
    Alert.alert('Sorry, this option is temporary not avalible');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgButton}>
          <Button title="SIGN IN" onPress={this.login} />
        </View>
        <Text style={styles.text}>OR</Text>
        <View style={styles.bgButton}>
          <Button title="SIGN UP" onPress={this.regist} />
        </View>
      </View>
    );
  }
}

AuthSignOrRegister.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withNavigation(AuthSignOrRegister);
