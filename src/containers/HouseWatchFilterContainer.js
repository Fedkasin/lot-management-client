import React, { PureComponent } from 'react';
import {
  ScrollView,
} from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  }

  onApplyHouseWatchFilter() {
    const { applyFilter, filters } = this.props;
    applyFilter(filters);
  }

  onChangeHouseWatchFilterRoomsFrom(value) {
    const { changeRoomsFrom } = this.props;
    changeRoomsFrom(value);
  }

  onChangeHouseWatchFilterRoomsTo(value) {
    const { changeRoomsTo } = this.props;
    changeRoomsTo(value);
  }

  onChangeHouseWatchFilterPriceFrom(value) {
    const { changePriceFrom } = this.props;
    changePriceFrom(value);
  }

  onChangeHouseWatchFilterPriceTo(value) {
    const { changePriceTo } = this.props;
    changePriceTo(value);
  }

  render() {
    const handlers = {
      roomsToHandler: this.onChangeHouseWatchFilterRoomsTo,
      roomsFromHandler: this.onChangeHouseWatchFilterRoomsFrom,
      priceToHandler: this.onChangeHouseWatchFilterPriceTo,
      priceFromHandler: this.onChangeHouseWatchFilterPriceFrom,
      applyFilter: this.onApplyHouseWatchFilter,
    };
    const { navigation, filters } = this.props;
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
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoomsFrom: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterRoomsFrom(value)),
    changeRoomsTo: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterRoomsTo(value)),
    changePriceFrom: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterPriceFrom(value)),
    changePriceTo: value => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterPriceTo(value)),
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
  applyFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseWatchFilterContainer));
