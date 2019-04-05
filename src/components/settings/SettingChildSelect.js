import React from 'react';
import {
  View, StyleSheet, Text, Picker,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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
});

class SettingChildSelect extends React.PureComponent {
  render() {
    const {
      value,
      items,
      label,
      handler,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Picker
          placeholder={{}}
          style={{ width: 150, height: 40 }}
          onValueChange={itemValue => handler(itemValue)}
          items={items.map(opt => ({ label: opt, value: opt }))}
          selectedValue={value}
          collapsable
        >
          {items.map((opt, index) => (
            <Picker.Item key={index} label={opt} value={opt} />))}
        </Picker>
      </View>
    );
  }
}

SettingChildSelect.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default SettingChildSelect;
