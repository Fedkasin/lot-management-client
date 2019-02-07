import React from 'react';
import { Permissions, Notifications, Font } from 'expo';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';

import actions from './actions/index';
import AppNavigator from './navigation/AppNavigator';
import reducers from './reducers/index';
import {
    fetchCarLotsSaga,
    fetchHouseLotsSaga,
    fetchSettingsSaga,
    udateWatchHouseLotsSaga,
    changeSettingSaga
} from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
  applyMiddleware(sagaMiddleware)
);

const registerForPushNotifications  = async () => {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

    if (status !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (status !== 'granted') {
            return;
        }
    }

    return Notifications.getExpoPushTokenAsync();
};

sagaMiddleware.run(changeSettingSaga);
sagaMiddleware.run(udateWatchHouseLotsSaga);
sagaMiddleware.run(fetchCarLotsSaga);
sagaMiddleware.run(fetchHouseLotsSaga);
sagaMiddleware.run(fetchSettingsSaga);

class App extends React.Component {
  state = {
    assetsLoaded: false,
    token: '',
    notification: {},
  };

  async componentDidMount() {
    await Font.loadAsync({
      'sans': require('../assets/fonts/NotoSansTC-Regular.otf'),
      'sans-bold': require('../assets/fonts/NotoSansTC-Black.otf')
    });

    const TOKEN = await registerForPushNotifications();

    await AsyncStorage.setItem(`@RootStore:NOTIFICATIONS_TOKEN`, TOKEN);

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
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {this.state.assetsLoaded && <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
