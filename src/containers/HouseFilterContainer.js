import React, { PureComponent } from 'react';
import { ScrollView, Alert } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HouseFilter from '../components/house/HouseFilter';
import actions from '../store/actions';
import * as Colors from '../constants/Colors';

class HouseFilterContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.onAddRoomCount = this.onAddRoomCount.bind(this);
    this.onChangeHouseFilterPriceTo = this.onChangeHouseFilterPriceTo.bind(this);
    this.onChangeHouseFilterPriceFrom = this.onChangeHouseFilterPriceFrom.bind(this);
  }

  onAddRoomCount(label) {
    const { addRoomCount, filters } = this.props;
    const roomsArray = filters.roomFilters.slice();
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
    const { navigation, filters } = this.props;
    const handlers = {
      priceToHandler: this.onChangeHouseFilterPriceTo,
      priceFromHandler: this.onChangeHouseFilterPriceFrom,
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
      priceTo: state.houseFilterReducers.priceTo,
      priceFrom: state.houseFilterReducers.priceFrom,
      roomFilters: state.houseFilterReducers.roomFilters,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePriceFrom: value => dispatch(actions.houseLotsFilterActions.updateHouseFilterPriceFrom(value)),
    changePriceTo: value => dispatch(actions.houseLotsFilterActions.updateHouseFilterPriceTo(value)),
    addRoomCount: value => dispatch(actions.houseLotsFilterActions.addRoomCount(value)),
  };
}

HouseFilterContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  changePriceTo: PropTypes.func.isRequired,
  changePriceFrom: PropTypes.func.isRequired,
  addRoomCount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseFilterContainer));
