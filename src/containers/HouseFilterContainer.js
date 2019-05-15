import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HouseFilter from '../components/house/HouseFilter';
import actions from '../store/actions';
import * as Colors from '../constants/Colors';

class HouseFilterContainer extends PureComponent {
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
  addRoomCount: PropTypes.func.isRequired,
  changePriceFrom: PropTypes.func.isRequired,
  changePriceTo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseFilterContainer));
