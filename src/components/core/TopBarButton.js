import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, TouchableOpacity, Platform,
} from 'react-native';
import IonIcon from './IonIcon';

function TopBarButton({
  onPress, iconColor, iosIcon, otherIcon,
}) {
  const styles = StyleSheet.create({
    button: {
      width: 40,
      height: 40,
      marginRight: 9,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <IonIcon
        name={Platform.OS === 'ios' ? iosIcon : otherIcon}
        color={iconColor}
      />
    </TouchableOpacity>
  );
}

TopBarButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconColor: PropTypes.string.isRequired,
  iosIcon: PropTypes.string.isRequired,
  otherIcon: PropTypes.string.isRequired,
};

export default TopBarButton;
