import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  error: {
    color: '#f00',
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
