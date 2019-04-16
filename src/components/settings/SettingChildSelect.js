import React from 'react';
import {
  View, StyleSheet, Text, Picker, Platform, ActionSheetIOS,
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
  divider: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
});

class SettingChildSelect extends React.PureComponent {
  handleClick() {
    const { items, handler } = this.props;
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: items,
      },
      (buttonIndex) => {
        handler(items[buttonIndex]);
      },
    );
  }

  render() {
    const {
      value,
      items,
      label,
      handler,
    } = this.props;
    if (Platform.OS === 'ios') {
      return (
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <Text style={{ fontSize: 20, margin: 10, color: Colors.lightGray }} onPress={() => { this.handleClick(); }}>{value}</Text>
          <View style={styles.divider} />
        </View>
      );
    }
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
            <Picker.Item key={`item-${index + 1}`} label={opt} value={opt} />))}
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
