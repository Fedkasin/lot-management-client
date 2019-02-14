import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

function MonoText(props) {
  const { style } = props;
  return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />;
}

MonoText.propTypes = {
  style: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MonoText;
