import React from 'react';
import {
  View, StyleSheet, Text, Alert,
} from 'react-native';
import PropTypes from 'prop-types';

import { Localization } from 'expo';
import i18n from 'i18n-js';
import SettingChildSelect from '../settings/SettingChildSelect';
import SettingChildCheckbox from '../settings/SettingChildCheckbox';
import * as filtersConst from '../../constants/Filters';
import * as Colors from '../../constants/Colors';
import Locales from '../../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

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
  select: {
    height: 50,
    width: '50%',
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
        `${i18n.t('You shouldn`t do this')}`,
        `${i18n.t('FROM should be less or equal TO')}`,
        [
          {
            text: `${i18n.t('okay')}`,
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
        `${i18n.t('You shouldn`t do this')}`,
        `${i18n.t('TO should be more or equal FROM')}`,
        [
          {
            text: `${i18n.t('okay')}`,
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
        <Text style={styles.bigLabel}>{i18n.t('Rooms count')}</Text>
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
        <Text style={styles.bigLabel}>{i18n.t('Price')}</Text>
        <View style={{ flexDirection: 'row' }}>
          <SettingChildSelect
            style={styles.select}
            value={filters.priceFrom}
            items={filtersConst.pricing}
            label={i18n.t('from')}
            handler={this.onChangeHouseFilterPriceFrom}
          />
          <SettingChildSelect
            style={styles.select}
            value={filters.priceTo}
            items={filtersConst.pricing}
            label={i18n.t('to')}
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
