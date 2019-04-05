import React from 'react';
import {
  View, StyleSheet, Text, Slider,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: 9,
    flex: 1,
    width: '50%',
  },
  label: {
    fontSize: 20,
  },
  value: {
    fontSize: 15,
  },
  slider: {
    justifyContent: 'center',
  },
});

class SettingChildSlider extends React.PureComponent {
  render() {
    const {
      text,
      from,
      to,
      step,
      value,
      handler,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{text}</Text>
        <Slider
          style={styles.slider}
          minimumValue={from}
          maximumValue={to}
          step={step}
          value={value}
          onValueChange={handler}
        />
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  }
}

SettingChildSlider.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

export default SettingChildSlider;
