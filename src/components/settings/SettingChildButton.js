import React from 'react';
import {
  View, StyleSheet, Text, Button,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
  },
  label: {
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
});

class SettingChildButton extends React.PureComponent {
  render() {
    const { child } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{child.label}</Text>
        <Button
          buttons={child.options}
          selectedIndex={child.options.indexOf(child.value)}
        />
      </View>
    );
  }
}

SettingChildButton.propTypes = {
  child: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default SettingChildButton;
