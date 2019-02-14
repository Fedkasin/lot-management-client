import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});

class SettingChildCheckbox extends React.PureComponent {
  render() {
    const { child } = this.props;
    return (
      <View style={styles.container}>
        <CheckBox
          containerStyle={styles.checkboxContainer}
          title={child.label}
          checked={child.value}
        />
      </View>
    );
  }
}

SettingChildCheckbox.propTypes = {
  child: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SettingChildCheckbox;
