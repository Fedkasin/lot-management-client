import React from 'react';
import {
  View, StyleSheet, Text, Platform, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import IonIcon from '../core/IonIcon';

import * as Colors from '../../constants/Colors';

function houseJob({
  text, onPlayPause, onClose, iosIcon, otherIcon,
}) {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomColor: Colors.lightGray,
      borderBottomWidth: 1,
    },
    job: {
      fontSize: 16,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 5,
    },
    jobButtons: {
      display: 'flex',
      flexDirection: 'row',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.job}>{text}</Text>
      <View style={styles.jobButtons}>
        <TouchableOpacity
          style={{ padding: 5, marginRight: 9 }}
          onPress={onPlayPause}
        >
          <IonIcon
            name={Platform.OS === 'ios' ? iosIcon : otherIcon}
            color={Colors.gray}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={onClose}
        >
          <IonIcon
            name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
            color={Colors.gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

houseJob.propTypes = {
  text: PropTypes.string.isRequired,
  iosIcon: PropTypes.string.isRequired,
  otherIcon: PropTypes.string.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default houseJob;
