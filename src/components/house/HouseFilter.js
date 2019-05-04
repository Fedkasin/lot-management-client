import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import PropTypes from 'prop-types';

import SettingChildSelect from '../settings/SettingChildSelect';
import SettingChildCheckbox from '../settings/SettingChildCheckbox';
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
  bigLabel: {
    fontSize: 20,
    padding: 10,
  },
});

class HouseFilter extends React.PureComponent {
  render() {
    const { filters, handlers } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.bigLabel}>Rooms count</Text>
        <View style={{ flexDirection: 'row' }}>
          <SettingChildCheckbox
            value={false}
            label="1"
            handler={handlers.addRoomCount}
          />
          <SettingChildCheckbox
            value={false}
            label="2"
            handler={handlers.addRoomCount}
          />
          <SettingChildCheckbox
            value={false}
            label="3"
            handler={handlers.addRoomCount}
          />
          <SettingChildCheckbox
            value={false}
            label="4"
            handler={handlers.addRoomCount}
          />
        </View>
        <Text style={styles.bigLabel}>Price</Text>
        <View style={{ flexDirection: 'row' }}>
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
