import React, { PureComponent } from 'react';
import {
  Permissions, Notifications, registerRootComponent,
} from 'expo';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import actions from './store/actions/index';
import AppContainer from './router';
import { firebaseConfig } from './constants/Config';
import initStore from './store';
import sagaService from './services/sagaService';
import AssetsLoader from './containers/AssetsLoaderContainer';
import * as Errors from './constants/Errors';

firebase.initializeApp(firebaseConfig);

const store = initStore();

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
  async componentDidMount() {
    const TOKEN = await getPushToken();
    await AsyncStorage.setItem('@RootStore:NOTIFICATIONS_TOKEN', TOKEN || '[NOTIFICATIONS_FORBIDDEN]');

    this._notificationSubscription = Notifications.addListener(this._handleNotification);

    firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        try {
          await AsyncStorage.removeItem('@UserStore:FBUSER');
          await AsyncStorage.removeItem('@UserStore:API_TOKEN');
          store.dispatch(actions.authActions.loginFail());
        } catch (err) {
          store.dispatch(actions.authActions.logoutFail());
        }
      } else {
        try {
          await AsyncStorage.setItem('@UserStore:FBUSER', JSON.stringify(user.providerData[0]));
          const API_TOKEN = await AsyncStorage.getItem('@UserStore:API_TOKEN');
          if (API_TOKEN) {
            store.dispatch(actions.authActions.loginSuccess());
          } else {
            store.dispatch(actions.authActions.loginFail(Errors.authfail));
          }
        } catch (err) {
          store.dispatch(actions.authActions.loginFail(err.message));
        }
      }
    });
  }

  attachNavigatorService(rootSwitchNavigatorRef) {
    sagaService.setNavigatorContainer(rootSwitchNavigatorRef);
  }

  _handleNotification(notification) {
    const splitted = notification.data.type.split('-');
    if (splitted[0] === 'update') {
      store.dispatch(actions.houseWatchLotsActions.checkWatchHouseLotsState());
    }
  }

  render() {
    return (
      <Provider store={store}>
        <AssetsLoader>
          <AppContainer ref={this.attachNavigatorService} />
        </AssetsLoader>
      </Provider>
    );
  }
}

export default registerRootComponent(App);
