import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, TouchableOpacity, Platform,
} from 'react-native';
import IonIcon from './IonIcon';

function TopbarActionButton({
  iconColor, iosIcon, otherIcon, onTap,
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
    <TouchableOpacity
      onPress={onTap}
      style={styles.button}
    >
      <IonIcon
        name={Platform.OS === 'ios' ? iosIcon : otherIcon}
        color={iconColor}
      />
    </TouchableOpacity>
  );
}

TopbarActionButton.propTypes = {
  iconColor: PropTypes.string.isRequired,
  iosIcon: PropTypes.string.isRequired,
  otherIcon: PropTypes.string.isRequired,
  onTap: PropTypes.func,
};

TopbarActionButton.defaultProps = {
  onTap: null,
};

export default TopbarActionButton;
