import React from 'react';
import {
  View, StyleSheet, Text, Alert,
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
  constructor(props) {
    super(props);

    this.onChangeHouseFilterPriceTo = this.onChangeHouseFilterPriceTo.bind(this);
    this.onChangeHouseFilterPriceFrom = this.onChangeHouseFilterPriceFrom.bind(this);
    this.onAddRoomCount = this.onAddRoomCount.bind(this);
  }

  onAddRoomCount(label) {
    const { addRoomCount, filters } = this.props;
    const roomsArray = [...filters.roomFilters];
    if (roomsArray.indexOf(label) === -1) {
      roomsArray.push(label);
    } else {
      roomsArray.splice(roomsArray.indexOf(label), 1);
    }
    addRoomCount(roomsArray); // send array of rooms
  }

  onChangeHouseFilterPriceFrom(value) {
    const { changePriceFrom, filters } = this.props;
    if (parseInt(value, 10) > parseInt(filters.priceTo, 10)) {
      Alert.alert(
        'You shouldn`t do this',
        'FROM should be less or equal TO',
        [
          {
            text: 'okay',
            onPress: () => { },
          },
        ],
        { cancelable: false },
      );
    } else {
      changePriceFrom(value);
    }
  }

  onChangeHouseFilterPriceTo(value) {
    const { changePriceTo, filters } = this.props;
    if (parseInt(value, 10) < parseInt(filters.priceFrom, 10)) {
      Alert.alert(
        'You shouldn`t do this',
        'TO should be more or equal FROM',
        [
          {
            text: 'okay',
            onPress: () => { },
          },
        ],
        { cancelable: false },
      );
    } else {
      changePriceTo(value);
    }
  }

  render() {
    const { filters } = this.props;
    const roomsArray = [...filters.roomFilters];
    return (
      <View style={styles.container}>
        <Text style={styles.bigLabel}>Rooms count</Text>
        <View style={{ flexDirection: 'row' }}>
          { filtersConst.roomCount.map((value, index) => (
            <SettingChildCheckbox
              key={`checkBox-${index + 1}`}
              value={(roomsArray.indexOf(value) !== -1)}
              label={value}
              handler={this.onAddRoomCount}
            />
          ))}
        </View>
        <Text style={styles.bigLabel}>Price</Text>
        <View style={{ flexDirection: 'row' }}>
          <SettingChildSelect
            style={{ height: 50, width: '50%' }}
            value={filters.priceFrom}
            items={filtersConst.pricing}
            label="from"
            handler={this.onChangeHouseFilterPriceFrom}
          />
          <SettingChildSelect
            style={{ height: 50, width: '50%' }}
            value={filters.priceTo}
            items={filtersConst.pricing}
            label="to"
            handler={this.onChangeHouseFilterPriceTo}
          />
        </View>
      </View>
    );
  }
}

HouseFilter.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  changePriceTo: PropTypes.func.isRequired,
  changePriceFrom: PropTypes.func.isRequired,
  addRoomCount: PropTypes.func.isRequired,
};

export default HouseFilter;
