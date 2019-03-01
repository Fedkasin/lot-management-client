import React, { PureComponent } from 'react';
import {
  Permissions,
  Notifications,
  Font,
  registerRootComponent,
} from 'expo';
import {
  Platform, StatusBar, StyleSheet, View, AsyncStorage,
} from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import actions from './src/store/actions/index';
import RootSwitchNavigator from './src/router/index';
import { firebaseConfig } from './src/constants/Config';
import initStore from './src/store/index';
import sagaService from './src/services/sagaService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const store = initStore();

firebase.initializeApp(firebaseConfig);

const getPushToken = async () => {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    const { stat } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (stat !== 'granted') {
      return null;
    }
  }

  return Notifications.getExpoPushTokenAsync();
};

class App extends PureComponent {
  static attatchNavigatorService(rootSwitchNavigatorRef) {
    console.log('Attached nav ', rootSwitchNavigatorRef);
    sagaService.setNavigatorContainer(rootSwitchNavigatorRef);
  };

  state = {
    assetsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      sans: require('./assets/fonts/NotoSansTC-Regular.otf'),
      'sans-bold': require('./assets/fonts/NotoSansTC-Black.otf'),
    });

    const TOKEN = await getPushToken();
    await AsyncStorage.setItem('@RootStore:NOTIFICATIONS_TOKEN', TOKEN);

    this._notificationSubscription = Notifications.addListener(this._handleNotification);

    this.setState({ assetsLoaded: true });
  }

  async componentWillUnmount() {
    await AsyncStorage.clear();
  }

  _handleNotification(notification) {
    const splitted = notification.data.type.split('-');
    if (splitted[0] === 'update') {
      store.dispatch(actions.houseLotsActions.updateHouseWatchLots(notification.data.apartments));
    }
  }

  render() {
    const { assetsLoaded } = this.state;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {assetsLoaded && (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <RootSwitchNavigator
              ref={nav => {
                console.log('NNAAAAVV ', nav);
                // App.attatchNavigatorService(nav)
              }}
            />
          </View>
          )}
        </View>
      </Provider>
    );
  }
}

export default App;
