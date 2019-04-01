import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  StyleSheet, TouchableOpacity, Platform,
} from 'react-native';
import IonIcon from './IonIcon';

function TopBarButton({
  iconColor, iosIcon, otherIcon, navigation, routeName,
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
      onPress={() => {
        navigation.navigate(routeName);
      }}
      style={styles.button}
    >
      <IonIcon
        name={Platform.OS === 'ios' ? iosIcon : otherIcon}
        color={iconColor}
      />
    </TouchableOpacity>
  );
}

TopBarButton.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  iconColor: PropTypes.string.isRequired,
  iosIcon: PropTypes.string.isRequired,
  otherIcon: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};

export default withNavigation(TopBarButton);
