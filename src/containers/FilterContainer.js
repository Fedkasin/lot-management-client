import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  View, TouchableOpacity, Platform, StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';
import IonIcon from '../components/core/IonIcon';

function FilterContainer({ navigation }) {
  return (
    <View>
      <Header
        backgroundColor="#fff"
        centerComponent={{ text: 'Filter options', style: { color: '#000', fontSize: 24, marginBottom: -5 } }}
        leftComponent={(
          <TouchableOpacity onPress={() => navigation.navigate('App')}>
            <IonIcon
              name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
              color="black"
            />
          </TouchableOpacity>
)}
      />
    </View>
  );
}

FilterContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withNavigation(FilterContainer);
