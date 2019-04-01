import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import IcoButton from '../core/IcoButton';

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
          color="#efefef"
          onPress={child.onPress}
          textColor="#131313"
          iconColor="#131313"
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
