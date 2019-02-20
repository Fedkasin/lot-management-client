import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Text, TouchableOpacity } from 'react-native';

function FilterContainer({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('HouseLots')}>
      <Text>back</Text>
    </TouchableOpacity>
  );
}

FilterContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withNavigation(FilterContainer);
