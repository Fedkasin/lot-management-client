import React, { PureComponent } from 'react';
import {
  Notifications, registerRootComponent, Audio,
} from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import actions from './store/actions/index';
import AppContainer from './router';
import { firebaseConfig } from './constants/Config';
import initStore from './store';
import sagaService from './services/sagaService';
import { JOB_WATCH_SCREEN } from './constants/Routes';

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
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
  }

  async componentDidMount() {
    // eslint-disable-next-line no-console
    console.disableYellowBox = true;
    sagaService.setNavigatorContainer(this.appContainer);
    const TOKEN = await getPushToken().catch(() => Promise.resolve(null));
    await AsyncStorage.setItem('@RootStore:NOTIFICATIONS_TOKEN', TOKEN || '[NOTIFICATIONS_FORBIDDEN]');

    this._notificationSubscription = Notifications.addListener(this._handleNotification);

    firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        try {
          await AsyncStorage.removeItem('@UserStore:FBUSER');
          await AsyncStorage.removeItem('@UserStore:API_TOKEN');
          await AsyncStorage.removeItem('@UserStore:TOKEN');
          store.dispatch(actions.authActions.logout());
        } catch (err) {
          store.dispatch(actions.authActions.logoutFail(err.toString()));
        }
        return;
      }
      try {
        await AsyncStorage.setItem('@UserStore:FBUSER', JSON.stringify(user.providerData[0]));
        const API_TOKEN = await AsyncStorage.getItem('@UserStore:API_TOKEN');
        if (API_TOKEN) store.dispatch(actions.authActions.loginSuccess());
      } catch (err) {
        store.dispatch(actions.authActions.loginFail(err.toString()));
      }
    });
  }

  async _handleNotification(notification) {
    const splitted = notification.data.type.split('-');
    if (splitted[0] === 'update') {
      store.dispatch(actions.houseWatchLotsActions.checkWatchHouseLotsState());
      if (notification.origin === 'received') {
        const soundObject = new Audio.Sound();
        try {
          await soundObject.loadAsync(require('../assets/sounds/miao.mp3'));
          await soundObject.playAsync();
        } catch (error) {
          // An error occurred!
        }
      }
      if (notification.origin === 'selected') {
        store.dispatch(actions.houseWatchLotsActions.updateHouseWatchLots(notification.data.jobId));
        store.dispatch(actions.navigationActions.navigate(JOB_WATCH_SCREEN));
      }
    }
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer ref={this.appContainer} />
      </Provider>
    );
  }
}

export default registerRootComponent(App);
