import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import SettingChildSelect from '../settings/SettingChildSelect';
import IcoButton from '../core/IcoButton';
import * as filtersConst from '../../constants/Filters';
import * as Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
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
        <SettingChildSelect
          value={filters.roomsFrom}
          items={filtersConst.roomCount}
          label="Rooms From"
          handler={handlers.roomsFromHandler}
        />
        <SettingChildSelect
          value={filters.roomsTo}
          items={filtersConst.roomCount}
          label="Rooms To"
          handler={handlers.roomsToHandler}
        />
        <SettingChildSelect
          value={filters.priceFrom}
          items={filtersConst.pricing}
          label="Price From"
          handler={handlers.priceFromHandler}
        />
        <SettingChildSelect
          value={filters.priceTo}
          items={filtersConst.pricing}
          label="Price To"
          handler={handlers.priceToHandler}
        />
        <IcoButton
          text="Accept"
          color={Colors.green}
          onPress={handlers.applyFilter}
          textColor={Colors.white}
          iconColor={Colors.white}
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
