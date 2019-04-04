import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  error: {
    color: Colors.red,
  },
});

function ErrorContainer(props) {
  const { error } = props;
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

ErrorContainer.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorContainer;
