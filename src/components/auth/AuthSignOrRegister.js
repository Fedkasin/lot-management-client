import React, { PureComponent } from 'react';
import {
  StyleSheet, Text, View, Alert,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { DangerZone } from 'expo';
import IcoButton from '../core/IcoButton';
import { AUTH_FORM_SCREEN } from '../../constants/Routes';
import PropTypes from 'prop-types';
import ErrorContainer from '../core/ErrorContainer';

const { Lottie } = DangerZone;

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
  lottieLogo: {
    width: '100%',
    height: '40%',
    marginTop: 10,
  },
});

class AuthSignOrRegister extends PureComponent {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    this.animation.play();
  }

  login() {
    const { navigation } = this.props;
    navigation.navigate(AUTH_FORM_SCREEN);
  }

  regist() {
    Alert.alert('Sorry, this option is temporary not avalible');
  }

  render() {
    const { onSignIn, onSignUp, authError } = this.props;
    return (
      <View style={styles.container}>
        <Lottie
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../../../assets/animation/house.json')}
          autoPlay
          loop={false}
          style={styles.lottieLogo}
        />
        <IcoButton
          text="Sign in"
          color="#28a745"
          onPress={this.login}
          textColor="#f8f9fa"
          iconColor="#f8f9fa"
          iosIcon="ios-key"
          otherIcon="md-key"
        />
        <Text style={styles.text}>or</Text>
        <IcoButton
          text="Sign up"
          color="#fff"
          onPress={this.regist}
          textColor="#343a40"
          iconColor="#343a40"
          iosIcon="ios-create"
          otherIcon="md-create"
        />
        <View style={styles.bgButton}>
          <Button title="Sign In With Google" onPress={onSignIn} />
        </View>
        <Text style={styles.text}>OR</Text>
        <View style={styles.bgButton}>
          <Button title="Sign Up" onPress={onSignUp} />
        </View>
        { authError && <ErrorContainer error={authError} /> }
      </View>
    );
  }
}

AuthSignOrRegister.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

AuthSignOrRegister.defaultProps = {
  authError: null,
};

export default AuthSignOrRegister;
