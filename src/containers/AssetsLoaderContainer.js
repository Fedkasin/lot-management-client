import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { AppLoading, Font } from 'expo';
import { StyleSheet, Alert, View } from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../constants/Colors';

import actions from '../store/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

class AssetsLoader extends PureComponent {
  componentDidMount() {
    const { showFirstSplashScreen } = this.props;
    showFirstSplashScreen();
  }

  onFinishLoading = () => {
    const { appIsReady } = this.props;
    appIsReady();
  };

  cacheResourcesAsync = async () => {
    // await Asset.loadAsync({
    //   Splash: '../../assets/images/vector-six-grunge-paint-stroke-set.jpg'
    // });
    await Font.loadAsync({
      sans: require('../../assets/fonts/NotoSansTC-Regular.otf'),
      'sans-bold': require('../../assets/fonts/NotoSansTC-Black.otf'),
    });
  };

  onError = (e) => {
    Alert.alert(
      'AppLoading error',
      e,
      [{
        text: 'OK',
        onPress: () => {
          throw new Error(e);
        },
      }],
      { cancelable: false },
    );
  };


  render() {
    const { children, isAppReady } = this.props;

    if (!isAppReady) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onError={this.onError}
          onFinish={this.onFinishLoading}
          autoHideSplash={false}
        />
      );
    }

    return (
      <View style={styles.container}>
        {children}
      </View>
    );
  }
}

AssetsLoader.propTypes = {
  showFirstSplashScreen: PropTypes.func.isRequired,
  appIsReady: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isAppReady: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAppReady: state.rootReducers.isAppReady,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkIfLoggedIn: () => dispatch(actions.authActions.checkIfLoggedIn()),
    showFirstSplashScreen: () => dispatch(actions.authActions.showFirstSplashScreen()),
    appIsReady: () => dispatch(actions.rootActions.appIsReady()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AssetsLoader);
