import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import IcoButton from '../core/IcoButton';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    padding: 9,
    flex: 1,
  },
});

class SettingChildSingleButton extends React.PureComponent {
  render() {
    const { child } = this.props;

    return (
      <View style={styles.container}>
        <IcoButton
          style={styles.button}
          text={child.label}
          color={Colors.white}
          onPress={child.onPress}
          textColor={Colors.black}
          iconColor={Colors.black}
          iosIcon={child.iosicon}
          otherIcon={child.othericon}
        />
      </View>
    );
  }
}

SettingChildSingleButton.propTypes = {
  child: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default SettingChildSingleButton;
