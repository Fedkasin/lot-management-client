import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import PropTypes from 'prop-types';

import SettingChildSelect from '../settings/SettingChildSelect';
import * as filtersConst from '../../constants/Filters';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    flex: 1,
  },
  label: {
    flex: 1,
    fontFamily: 'sans',
    fontSize: 20,
    paddingLeft: 9,
    textAlign: 'left',
  },
  bigLabel: {
    fontSize: 20,
    padding: 10,
  },
});

class HouseFilter extends React.PureComponent {
  render() {
    const { filters, handlers } = this.props;
    // console.log('filters:', filters);
    return (
      <View style={styles.container}>
        <Text style={styles.bigLabel}>Rooms count</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <SettingChildSelect
            style={{ height: 50, width: '50%' }}
            value={filters.roomsFrom}
            items={filtersConst.roomCount}
            label="from"
            handler={handlers.roomsFromHandler}
          />
          <SettingChildSelect
            style={{ height: 50, width: '50%' }}
            value={filters.roomsTo}
            items={filtersConst.roomCount}
            label="to"
            handler={handlers.roomsToHandler}
          />
        </View>
        <View style={styles.divider} />
        <Text style={styles.bigLabel}>Price</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <SettingChildSelect
            style={{ height: 50, width: '50%' }}
            value={filters.priceFrom}
            items={filtersConst.pricing}
            label="from"
            handler={handlers.priceFromHandler}
          />
          <SettingChildSelect
            style={{ height: 50, width: '50%' }}
            value={filters.priceTo}
            items={filtersConst.pricing}
            label="to"
            handler={handlers.priceToHandler}
          />
        </View>
      </View>
    );
  }
}

HouseFilter.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  handlers: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default HouseFilter;
