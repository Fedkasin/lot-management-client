import React from 'react';
import { View, Text, CheckBox } from 'react-native';
import PropTypes from 'prop-types';

class SettingChildCheckbox extends React.PureComponent {
  render() {
    const { label, value, handler } = this.props;
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 60,
        marginRight: 10,
      }}
      >
        <Text style={{
          flex: 1,
          fontFamily: 'sans',
          fontSize: 20,
          paddingLeft: 9,
          textAlign: 'left',
        }}
        >
          {label}
        </Text>
        <CheckBox checked={value} onValueChange={handler} />
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
