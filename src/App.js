import React from 'react';
import {
  Permissions,
  Notifications,
  Font,
  registerRootComponent,
} from 'expo';
import {
  Platform, StatusBar, StyleSheet, View, AsyncStorage,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import actions from './actions/index';
import MainAppNavigator from './navigation/MainAppNavigator';
import reducers from './reducers/index';
import rootSaga from './sagas/root';
import { firebaseConfig } from './constants/Config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

firebase.initializeApp(firebaseConfig);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

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

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  state = {
    assetsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      sans: require('../assets/fonts/NotoSansTC-Regular.otf'),
      'sans-bold': require('../assets/fonts/NotoSansTC-Black.otf'),
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
            <MainAppNavigator />
          </View>
          )}
        </View>
      </Provider>
    );
  }
}

export default registerRootComponent(App);
