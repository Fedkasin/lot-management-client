import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  label: {
    flex: 1,
    fontFamily: 'sans',
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
  pickerSelectStyle: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  pickerButtonStyle: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'white',
  },
});

class SettingChildSelect extends React.PureComponent {
  render() {
    const { child } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{child.label}</Text>
        <RNPickerSelect
          placeholder={{}}
          items={child.options.map(opt => ({ label: opt, value: opt }))}
          style={styles.pickerSelectStyle}
          value={child.value}
        />
      </View>
    );
  }
}

SettingChildSelect.propTypes = {
  child: PropTypes.shape({
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string,
  }).isRequired,
};

export default SettingChildSelect;
