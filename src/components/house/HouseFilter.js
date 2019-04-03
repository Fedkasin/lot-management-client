import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import SettingChildSelect from '../settings/SettingChildSelect';
import IcoButton from '../core/IcoButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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

class HouseFilter extends React.PureComponent {
  render() {
    console.log('house filter props', this.props);
    const { filters, handlers } = this.props;
    return (
      <View style={styles.container}>
        <SettingChildSelect
          value={filters.roomsFrom}
          items={['1', '2', '3', '4']}
          label="Rooms From"
          handler={handlers.roomsFromHandler}
        />
        <SettingChildSelect
          value={filters.roomsTo}
          items={['1', '2', '3', '4']}
          label="Rooms To"
          handler={handlers.roomsToHandler}
        />
        <SettingChildSelect
          value={filters.priceFrom}
          items={['50', '100', '150', '200', '250', '300', '400', '500', '600', '700', '800', '900']}
          label="Price From"
          handler={handlers.priceFromHandler}
        />
        <SettingChildSelect
          value={filters.priceTo}
          items={['50', '100', '150', '200', '250', '300', '400', '500', '600', '700', '800', '900']}
          label="Price To"
          handler={handlers.priceToHandler}
        />
        <IcoButton
          text="Accept"
          color="#28a745"
          onPress={handlers.applyFilter}
          textColor="#f8f9fa"
          iconColor="#f8f9fa"
          iosIcon="ios-checkmark"
          otherIcon="md-checkmark"
        />
      </View>
    );
  }
}

HouseFilter.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  handlers: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default HouseFilter;
