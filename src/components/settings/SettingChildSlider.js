import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import { Slider } from 'react-native-elements';
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
    const { child } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{child.text}</Text>
        <Slider
          style={styles.slider}
          minimumValue={child.from}
          maximumValue={child.to}
          step={10}
          value={child.value}
          onValueChange={(e) => {
            child.value = e;
            this.forceUpdate();
          }}
        />
        <Text style={styles.value}>{child.value}</Text>
      </View>
    );
  }
}

SettingChildSlider.propTypes = {
  child: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SettingChildSlider;
