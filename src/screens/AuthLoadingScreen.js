import React from 'react';
import {
  ActivityIndicator, View, StatusBar,
} from 'react-native';

function AuthLoadingScreen() {
  return (
    <View style={{
      width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingScreen;
