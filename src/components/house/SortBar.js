import React from 'react';
import {
  View, StyleSheet, Text, Platform,
} from 'react-native';
import { Icon } from 'expo';
import PropTypes from 'prop-types';
import SingleSelect from '../settings/SingleSelect';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  label: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 2,
    flexDirection: 'row',
  },
});

class SortBar extends React.PureComponent {
  render() {
    const { display, handler } = this.props;
    return (
      <View style={[styles.container, { display: display ? 'flex' : 'none' }]}>
        <View style={styles.label}>
          <Text style={{ fontSize: 16, marginRight: 9 }}>SORT_BY</Text>
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? 'ios-swap' : 'md-swap'}
            color={Colors.gray}
            size={26}
            style={{ margin: 3 }}
          />
        </View>
        <SingleSelect
          value="0"
          items={[('DATE_NEW'), ('UP_NEW'), ('PRICE_HIGH'), ('PRICE_LOW')]}
          handler={handler}
        />
      </View>
    );
  }
}

SortBar.propTypes = {
  display: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
};

export default SortBar;
