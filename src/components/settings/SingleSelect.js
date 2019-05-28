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
    fontSize: 16,
    margin: 9,
    color: Colors.lightGray,
  },
  picker: {
    marginRight: -10,
  },
});

class SingleSelect extends React.PureComponent {
  state = {
    currentValue: 0,
  }

  handleClick() {
    const { items, handler } = this.props;
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: items,
      },
      (buttonIndex) => {
        this.setState({ currentValue: buttonIndex });
        handler(buttonIndex);
      },
    );
  }

  render() {
    const {
      value, items, handler,
    } = this.props;
    const { currentValue } = this.state;
    if (Platform.OS === 'ios') {
      return (
        <View style={[styles.container, { marginRight: -25 }]}>
          <Text style={styles.placeholder} onPress={() => this.handleClick()}>{items[value]}</Text>
          <View style={styles.divider} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          onValueChange={(itemValue) => { this.setState({ currentValue: itemValue }); handler(itemValue); }}
          items={items.map((opt, index) => ({ label: opt, value: index }))}
          selectedValue={currentValue}
          collapsable
        >
          {items.map((opt, index) => (
            <Picker.Item key={`item-${index + 1}`} label={opt} value={index} />))}
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
