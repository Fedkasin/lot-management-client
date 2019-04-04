import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    marginTop: '50%',
  },
  text: {
    fontSize: 28,
    opacity: 0.5,
  },
});

function BgMessage({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

BgMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BgMessage;
