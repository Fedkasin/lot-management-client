import React from 'react';
import { Font } from 'expo';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import reducers from './reducers';
import { fetchLotsSaga, fetchSettingsSaga } from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetchLotsSaga);
sagaMiddleware.run(fetchSettingsSaga);

class App extends React.Component {
  state = {
    assetsLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'sans': require('./assets/fonts/NotoSansTC-Regular.otf'),
      'sans-bold': require('./assets/fonts/NotoSansTC-Black.otf')
    });

    this.setState({ assetsLoaded: true });
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