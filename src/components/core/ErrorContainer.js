import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../../constants/Colors';

function ErrorContainer(props) {
  const { error } = props;
  return (
    <View>
      <Text style={{ color: Colors.red }}>{error}</Text>
    </View>
  );
}

ErrorContainer.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorContainer;
