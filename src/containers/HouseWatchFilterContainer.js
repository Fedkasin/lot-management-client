import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HouseFilter from '../components/house/HouseFilter';
import actions from '../store/actions';
import * as Colors from '../constants/Colors';

class HouseWatchFilterContainer extends PureComponent {
  render() {
    const {
      navigation, filters, addRoomCount, changePriceFrom, changePriceTo,
    } = this.props;
    return (
      <ScrollView style={{ backgroundColor: Colors.white }}>
        <HouseFilter
          filters={filters}
          addRoomCount={addRoomCount}
          changePriceFrom={changePriceFrom}
          changePriceTo={changePriceTo}
        />
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
      priceTo: state.houseFilterLiveReducers.priceTo,
      priceFrom: state.houseFilterLiveReducers.priceFrom,
      roomFilters: state.houseFilterLiveReducers.roomFilters,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePriceFrom: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterPriceFrom(value)),
    changePriceTo: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterPriceTo(value)),
    addRoomCount: value => dispatch(actions.houseWatchLotsFilterActions.addWatchRoomCount(value)),
    applyFilter: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterApply(value)),
  };
}

HouseWatchFilterContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  changePriceTo: PropTypes.func.isRequired,
  changePriceFrom: PropTypes.func.isRequired,
  addRoomCount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseWatchFilterContainer));
