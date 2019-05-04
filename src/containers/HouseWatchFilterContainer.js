import React, { PureComponent } from 'react';
import {
  ScrollView, Alert,
} from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as filtersConst from '../constants/Filters';
import HouseFilter from '../components/house/HouseFilter';
import actions from '../store/actions';
import * as Colors from '../constants/Colors';

class HouseWatchFilterContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.onChangeHouseWatchFilterRoomsTo = this.onChangeHouseWatchFilterRoomsTo.bind(this);
    this.onChangeHouseWatchFilterRoomsFrom = this.onChangeHouseWatchFilterRoomsFrom.bind(this);
    this.onChangeHouseWatchFilterPriceTo = this.onChangeHouseWatchFilterPriceTo.bind(this);
    this.onChangeHouseWatchFilterPriceFrom = this.onChangeHouseWatchFilterPriceFrom.bind(this);
    this.onApplyHouseWatchFilter = this.onApplyHouseWatchFilter.bind(this);
    this.onAddRoomCount = this.onAddRoomCount.bind(this);
  }

  onApplyHouseWatchFilter() {
    const { applyFilter, filters } = this.props;
    applyFilter(filters);
  }

  onAddRoomCount(value) {
    const { addRoomCount, filters } = this.props;
    addRoomCount(value);
    console.log('[onAddRoomCount]', filters);
  }

  onChangeHouseWatchFilterRoomsFrom(value) {
    const { changeRoomsFrom, filters } = this.props;
    if (value > filters.roomsTo) {
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
      const newRoomFilters = filtersConst.roomCount
        .filter((item) => parseInt(item, 10) >= parseInt(value, 10) && parseInt(item, 10) <= filters.roomsTo);
      changeRoomsFrom(value, newRoomFilters);
    }
  }

  onChangeHouseWatchFilterRoomsTo(value) {
    const { changeRoomsTo, filters } = this.props;
    if (value < filters.roomsFrom) {
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
      const newRoomFilters = filtersConst.roomCount
        .filter((item) => parseInt(item, 10) <= parseInt(value, 10) && parseInt(item, 10) >= filters.roomsFrom);
      changeRoomsTo(value, newRoomFilters);
    }
  }

  onChangeHouseWatchFilterPriceFrom(value) {
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

  onChangeHouseWatchFilterPriceTo(value) {
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
    const { navigation, filters } = this.props;
    const handlers = {
      roomsToHandler: this.onChangeHouseWatchFilterRoomsTo,
      roomsFromHandler: this.onChangeHouseWatchFilterRoomsFrom,
      priceToHandler: this.onChangeHouseWatchFilterPriceTo,
      priceFromHandler: this.onChangeHouseWatchFilterPriceFrom,
      applyFilter: this.onApplyHouseWatchFilter,
      addRoomCount: this.onAddRoomCount,
    };
    return (
      <ScrollView style={{ backgroundColor: Colors.white }}>
        <HouseFilter filters={filters} handlers={handlers} />
        <NavigationEvents
          onDidBlur={() => navigation.pop(null)}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: {
      roomsTo: state.houseFilterLiveReducers.roomsTo,
      roomsFrom: state.houseFilterLiveReducers.roomsFrom,
      priceTo: state.houseFilterLiveReducers.priceTo,
      priceFrom: state.houseFilterLiveReducers.priceFrom,
      roomFilters: state.houseFilterLiveReducers.roomFilters,
      priceFilters: state.houseFilterLiveReducers.priceFilters,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoomsFrom: (value, changeRoomsFrom) => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterRoomsFrom(value, changeRoomsFrom)),
    changeRoomsTo: (value, changeRoomsTo) => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterRoomsTo(value, changeRoomsTo)),
    changePriceFrom: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterPriceFrom(value)),
    changePriceTo: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterPriceTo(value)),
    addRoomCount: value => dispatch(actions.houseWatchLotsFilterActions.addRoomCount(value)),
    applyFilter: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterApply(value)),
  };
}

HouseWatchFilterContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  changeRoomsTo: PropTypes.func.isRequired,
  changeRoomsFrom: PropTypes.func.isRequired,
  changePriceTo: PropTypes.func.isRequired,
  changePriceFrom: PropTypes.func.isRequired,
  addRoomCount: PropTypes.func.isRequired,
  applyFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseWatchFilterContainer));
