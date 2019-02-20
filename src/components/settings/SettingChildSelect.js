import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  label: {
    flex: 1,
    fontFamily: 'sans',
    fontSize: 20,
    paddingLeft: 9,
    textAlign: 'left',
  },
  pickerSelectStyle: {
    fontSize: 16,
    paddingTop: 9,
    paddingHorizontal: 10,
    paddingBottom: 12,
    backgroundColor: 'white',
    color: 'black',
  },
  pickerButtonStyle: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'white',
  },
});

const pickerStyle = {
  inputIOS: {
    color: '#131313',
    paddingTop: 9,
    paddingHorizontal: 10,
    paddingBottom: 9,
  },
  inputAndroid: {
    color: '#131313',
  },
  placeholderColor: '#131313',
  underline: { borderTopWidth: 0 },
};

class SettingChildSelect extends React.PureComponent {
  render() {
    const { child } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{child.label}</Text>
        <View style={{
          height: 40, borderWidth: 1, borderColor: '#999', borderRadius: 5, marginBottom: 9, justifyContent: 'center',
        }}
        >
          <RNPickerSelect
            placeholder={{}}
            onValueChange={() => {}}
            items={child.options.map(opt => ({ label: opt, value: opt }))}
            style={pickerStyle}
            value={child.value}
          />
        </View>
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
