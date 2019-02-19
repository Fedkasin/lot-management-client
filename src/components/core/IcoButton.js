import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableOpacity, Platform,
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
      width: '90%',
      height: 50,
      borderColor: '#000',
      backgroundColor: [color],
      borderWidth: 1,
      borderRadius: 9,
      marginTop: 9,
    },
    text: {
      fontSize: 26,
      color: [textColor],
      textAlign: 'center',
      margin: 20,
    },
  });
  return (
    <View style={styles.bgButton}>
      <TouchableOpacity onPress={onPress} style={[styles.button, styles.colorSuccess, styles.textLight]}>
        <IonIcon
          name={Platform.OS === 'ios' ? iosIcon : otherIcon}
          color={iconColor}
        />
        <Text style={[styles.text, styles.textLight]}>{text}</Text>
      </TouchableOpacity>
    </View>
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
