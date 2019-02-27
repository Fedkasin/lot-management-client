import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TouchableOpacity, Platform,
} from 'react-native';
import IonIcon from './IonIcon';

function IcoButton({
  text, color, onPress, textColor, iconColor, iosIcon, otherIcon,
}) {
  const styles = StyleSheet.create({
    bgButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      height: 45,
      backgroundColor: [color],
      marginTop: 9,
      zIndex: 1,
    },
    text: {
      fontSize: 18,
      color: [textColor],
      textAlign: 'center',
      paddingLeft: 5,
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, styles.colorSuccess, styles.textLight]}>
      <IonIcon
        name={Platform.OS === 'ios' ? iosIcon : otherIcon}
        color={iconColor}
      />
      <Text style={[styles.text, styles.textLight]}>{text}</Text>
    </TouchableOpacity>
  );
}

IcoButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  textColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  iosIcon: PropTypes.string.isRequired,
  otherIcon: PropTypes.string.isRequired,
};

export default IcoButton;
