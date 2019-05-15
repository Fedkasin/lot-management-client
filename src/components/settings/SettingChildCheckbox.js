import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 60,
    marginRight: 10,
  },
  label: {
    flex: 1,
    fontFamily: 'sans',
    fontSize: 20,
    paddingLeft: 9,
    textAlign: 'left',
  },
  box: {
    backgroundColor: Colors.silver,
    width: 20,
    height: 20,
    marginRight: 9,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    width: 13,
    height: 13,
  },
});

class SettingChildCheckbox extends React.PureComponent {
  render() {
    const { label, handler, value } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {label}
        </Text>
        <TouchableOpacity
          style={styles.box}
          onPress={() => handler(label)}
        >
          <View style={[styles.checkMark, { backgroundColor: value === true ? Colors.green : Colors.silver }]} />
        </TouchableOpacity>
      </View>
    );
  }
}

SettingChildCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
};

export default SettingChildCheckbox;
