import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HouseFilter from '../components/house/HouseFilter';
import actions from '../store/actions';
import * as Colors from '../constants/Colors';
/* import LMapi from '../helpers/lmapi'; */

class HouseWatchFilterContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.onChangeHouseWatchFilterRoomsTo = this.onChangeHouseWatchFilterRoomsTo.bind(this);
    this.onChangeHouseWatchFilterRoomsFrom = this.onChangeHouseWatchFilterRoomsFrom.bind(this);
    this.onChangeHouseWatchFilterPriceTo = this.onChangeHouseWatchFilterPriceTo.bind(this);
    this.onChangeHouseWatchFilterPriceFrom = this.onChangeHouseWatchFilterPriceFrom.bind(this);
    this.onApplyFilter = this.onApplyFilter.bind(this);
  }

  async onApplyFilter() {
    try {
      const { navigation, filters } = this.props;
      navigation.pop(null);
      const rooms = [];
      for (let i = parseInt(filters.roomsFrom, 10); i < parseInt(filters.roomsTo, 10) + 1; i += 1) {
        rooms.push(i);
      }
      /* const params = {
        rooms,
        max: parseInt(filters.priceTo, 10),
        min: parseInt(filters.priceFrom, 10),
      }; */
      // await LMapi.startCurrentUserJob(params);
      /* const { applyFilter } = this.props;
      applyFilter(params); */
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
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
    applyFilter: params => dispatch(actions.houseWatchLotsFilterActions.updateHouseWatchFilterApply(params)),
  };
}

HouseWatchFilterContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  changeRoomsTo: PropTypes.func.isRequired,
  changeRoomsFrom: PropTypes.func.isRequired,
  changePriceTo: PropTypes.func.isRequired,
  changePriceFrom: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseWatchFilterContainer));
