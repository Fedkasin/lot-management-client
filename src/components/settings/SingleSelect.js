import React from 'react';
import {
  View, StyleSheet, Text, Picker, Platform, ActionSheetIOS,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  divider: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
  placeholder: {
    fontSize: 20,
    margin: 9,
    color: Colors.lightGray,
  },
  picker: {
    marginRight: -10,
  },
});

class SingleSelect extends React.PureComponent {
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
      value, items, handler,
    } = this.props;
    if (Platform.OS === 'ios') {
      return (
        <View style={styles.container}>
          <Text style={styles.placeholder} onPress={() => this.handleClick()}>{value}</Text>
          <View style={styles.divider} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Picker
          placeholder={{}}
          style={styles.picker}
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

SingleSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default SingleSelect;
