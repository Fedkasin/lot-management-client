import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { withNavigation, NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HouseFilter from '../components/house/HouseFilter';
import actions from '../store/actions';
import * as Colors from '../constants/Colors';
import HouseJob from '../components/house/houseJob';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  job: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  divider: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
});

class HouseWatchFilterContainer extends React.PureComponent {
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

  onCloseJob(value) {
    console.log('onCloseJob', value);
  }

  onPlayPauseJob(value) {
    console.log('onPlayPauseJob', value);
  }

  render() {
    const handlers = {
      roomsToHandler: this.onChangeHouseWatchFilterRoomsTo,
      roomsFromHandler: this.onChangeHouseWatchFilterRoomsFrom,
      priceToHandler: this.onChangeHouseWatchFilterPriceTo,
      priceFromHandler: this.onChangeHouseWatchFilterPriceFrom,
      applyFilter: this.onApplyHouseWatchFilter,
    };
    const { navigation, filters, jobs } = this.props;
    return (
      <ScrollView style={{ backgroundColor: Colors.white }}>
        <Text style={{ fontSize: 20, padding: 10, backgroundColor: Colors.silver }}>Started tasks:</Text>
        <View style={styles.container}>
          {jobs.map((value, index) => (
            <HouseJob
              key={`job-${index + 1}`}
              text={`${index + 1}. ${value.jobId} [${value.params.rooms}] - $[${value.params.min}-${value.params.max}]`}
              iosIcon={value.state === 'RUNNING' ? 'ios-pause' : 'ios-play'}
              otherIcon={value.state === 'RUNNING' ? 'md-pause' : 'md-play'}
              onPlayPause={() => this.onPlayPauseJob(value.jobId)}
              onClose={() => this.onCloseJob(value.jobId)}
            />
          ))}
        </View>
        <Text style={{ fontSize: 20, padding: 10, backgroundColor: Colors.silver }}>Create new task:</Text>
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
    jobs: state.houseWatchLotsReducers.houseWatchJobs,
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
  jobs: PropTypes.arrayOf(PropTypes.any).isRequired,
  changeRoomsTo: PropTypes.func.isRequired,
  changeRoomsFrom: PropTypes.func.isRequired,
  changePriceTo: PropTypes.func.isRequired,
  changePriceFrom: PropTypes.func.isRequired,
  applyFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(HouseWatchFilterContainer));
