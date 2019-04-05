import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HouseFilter from '../components/house/HouseFilter';
import actions from '../store/actions';
import * as Colors from '../constants/Colors';

class HouseFilterContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.onChangeHouseFilterRoomsTo = this.onChangeHouseFilterRoomsTo.bind(this);
    this.onChangeHouseFilterRoomsFrom = this.onChangeHouseFilterRoomsFrom.bind(this);
    this.onChangeHouseFilterPriceTo = this.onChangeHouseFilterPriceTo.bind(this);
    this.onChangeHouseFilterPriceFrom = this.onChangeHouseFilterPriceFrom.bind(this);
    this.onApplyFilter = this.onApplyFilter.bind(this);
  }

  onApplyFilter() {
    const { applyFilter, filters, navigation } = this.props;
    navigation.pop(null);
    applyFilter(filters);
  }

  onChangeHouseFilterRoomsFrom(value) {
    const { changeRoomsFrom } = this.props;
    changeRoomsFrom(value.toString());
  }

  onChangeHouseFilterRoomsTo(value) {
    const { changeRoomsTo } = this.props;
    changeRoomsTo(value.toString());
  }

  onChangeHouseFilterPriceFrom(value) {
    const { changePriceFrom } = this.props;
    changePriceFrom(value);
  }

  onChangeHouseFilterPriceTo(value) {
    const { changePriceTo } = this.props;
    changePriceTo(value);
  }

  render() {
    const handlers = {
      roomsToHandler: this.onChangeHouseFilterRoomsTo,
      roomsFromHandler: this.onChangeHouseFilterRoomsFrom,
      priceToHandler: this.onChangeHouseFilterPriceTo,
      priceFromHandler: this.onChangeHouseFilterPriceFrom,
      applyFilter: this.onApplyFilter,
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
      roomsTo: state.houseFilterReducers.roomsTo,
      roomsFrom: state.houseFilterReducers.roomsFrom,
      priceTo: state.houseFilterReducers.priceTo,
      priceFrom: state.houseFilterReducers.priceFrom,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoomsFrom: value => dispatch(actions.houseLotsFilterActions.updateHouseFilterRoomsFrom(value)),
    changeRoomsTo: value => dispatch(actions.houseLotsFilterActions.updateHouseFilterRoomsTo(value)),
    changePriceFrom: value => dispatch(actions.houseLotsFilterActions.updateHouseFilterPriceFrom(value)),
    changePriceTo: value => dispatch(actions.houseLotsFilterActions.updateHouseFilterPriceTo(value)),
    applyFilter: filters => dispatch(actions.houseLotsActions.fetchHouseLots(filters)),
  };
}

HouseFilterContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  changeRoomsTo: PropTypes.func.isRequired,
  changeRoomsFrom: PropTypes.func.isRequired,
  changePriceTo: PropTypes.func.isRequired,
  changePriceFrom: PropTypes.func.isRequired,
  applyFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseFilterContainer));
