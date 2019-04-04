import React from 'react';
import {
  View, StyleSheet, Button,
} from 'react-native';
import PropTypes from 'prop-types';

import SettingChildSelect from '../settings/SettingChildSelect';

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
    const { filters, handlers } = this.props;
    return (
      <View style={styles.container}>
        <SettingChildSelect value={filters.roomsFrom} items={['1', '2', '3']} label="Rooms From" handler={handlers.roomsFromHandler} />
        <SettingChildSelect value={filters.roomsTo} items={['1', '2', '3']} label="Rooms To" handler={handlers.roomsToHandler} />
        <SettingChildSelect value={filters.priceFrom} items={['100', '200', '300', '400', '500']} label="Price From" handler={handlers.priceFromHandler} />
        <SettingChildSelect value={filters.priceTo} items={['100', '200', '300', '400', '500']} label="Price To" handler={handlers.priceToHandler} />
        <Button title="Accept" onPress={handlers.applyFilter} />
      </View>
    );
  }
}

HouseFilter.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  handlers: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default HouseFilter;
