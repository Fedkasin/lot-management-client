import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../../constants/Colors';

function ErrorContainer(props) {
  const { error } = props;
  return (
    <Text style={{ color: Colors.red }}>{error}</Text>
  );
}

ErrorContainer.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorContainer;
