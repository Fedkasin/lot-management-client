import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import { Slider } from 'react-native-elements';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
  },
  label: {
    fontFamily: 'sans',
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
});

class SettingChildSlider extends React.PureComponent {
  render() {
    const { child } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{child.label}</Text>
        <Slider
          minimumValue={50}
          maximumValue={5500}
          value={child.value}
          onValueChange={child.onChange}
        />
      </View>
    );
  }
}

SettingChildSlider.propTypes = {
  child: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SettingChildSlider;
